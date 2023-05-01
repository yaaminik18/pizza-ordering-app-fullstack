import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/users.entity';
import { UsersDto } from 'src/dto/users.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, pass: string) {
        // find if user exist with this email
        const user = await this.userService.findOneByEmail(username);
        if (!user) {
            return null;
        }

        // find if user password match
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user['dataValues'];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        const id=await this.userService.findidByEmail(user.email)
        return { user, token , id};
    }
   
      
    public async create(user: UsersDto) {
        console.log(user.password)
         //hash the password
        const pass = await this.hashPassword(user.password);

        // create the user
        const newUser = await this.userService.create(user);
        /*This code snippet is using destructuring assignment to extract the password property from the newUser['dataValues'] object and then store the remaining properties in a new object called result.

        The generateToken() function is then called with the result object as an argument to generate a token.
        
        The purpose of extracting the password property and storing the remaining properties in result is to prevent the password from being included in the token generation process. This is a common security measure to ensure that sensitive information, such as passwords, are not leaked or exposed to potential attackers.*/
        
        const { password, ...result } = newUser['dataValues'];

        // generate token
        const token = await this.generateToken(result);

        // return the user and the token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password:string) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hashSync(password, salt);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}
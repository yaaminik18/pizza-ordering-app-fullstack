import { Injectable, Inject } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersDto } from '../dto/users.dto';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class UsersService {

    constructor(@InjectModel(Users) private readonly userRepository: typeof Users) { }

    
    create(usersdto:UsersDto){
        
        let user:Users=new Users()
        return this.userRepository.create(
            {fullname:usersdto.fullname,
            email:usersdto.email,
            password:usersdto.password,
            gender:usersdto.gender})
        }

    async findOneByEmail(email: string): Promise<Users> {
        return await this.userRepository.findOne<Users>({ where: { email } });
    }

    async findOneById(id: number): Promise<Users> {
        return await this.userRepository.findOne<Users>({ where: { id } });
    }
    async findidByEmail(email: string): Promise<number> {
       const user= await this.userRepository.findOne<Users>({ where: { email } });
       return user.id;
    }
}
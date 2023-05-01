import { Controller, Body, Post, Request,Response, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersDto } from '../dto/users.dto';
import { AlreadyExistingUser } from 'src/guards/alreadyexistinguser.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    
    @Post('login')
    async login(@Request() req,@Body() body,@Response() res) {
        const auth= await this.authService.login(body);
        res.send(auth);
    }

    @UseGuards(AlreadyExistingUser)
    @Post('signup')
    async signUp(@Body(ValidationPipe) user: UsersDto) {
        console.log(user)
        return await this.authService.create(user);
    }
}
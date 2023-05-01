import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UsersDto {
     @IsNotEmpty()
     fullname: string;

     @IsNotEmpty()
     @IsEmail()
     email: string;

     @IsNotEmpty()
     @MinLength(7)
     password: string;
     @IsNotEmpty()
     gender: string;
}

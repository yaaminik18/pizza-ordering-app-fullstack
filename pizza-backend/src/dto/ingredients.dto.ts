import { IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class IngredientsDto {
     @IsNotEmpty()
    name: string;

     @IsNotEmpty()
     @IsNumber()
     price: number;

     
}

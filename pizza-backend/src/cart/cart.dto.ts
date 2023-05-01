import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { NotNull } from "sequelize-typescript";
import { Ingredients } from "src/ingredients/ingredients.entity";

export class CartDto {
    @IsNotEmpty()
    @IsNumber()
    pizzaId: number;
    
    @IsNotEmpty()
    @IsArray()
    ingredients:number[]
    /*@IsNotEmpty()
    @IsNumber()
    ingredient1: number;

    @IsNotEmpty()
    @IsNumber()
    ingredient2:number;*/
  }
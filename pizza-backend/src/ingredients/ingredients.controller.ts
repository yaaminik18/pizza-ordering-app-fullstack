import { Controller, Get, Param } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

import { Ingredients } from './ingredients.entity';

@Controller('ingredients')
export class IngredientsController {
    constructor(private ingredientService:IngredientsService){}

    @Get()
    getAllIngredients(){
        return this.ingredientService.findAll()
    }
    @Get(':id')
    getIngredientById(@Param('id')id:number){
        return this.ingredientService.findById(id)
    }
}

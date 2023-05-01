import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ingredients } from './ingredients.entity';


@Injectable()
export class IngredientsService {
    constructor(
        @InjectModel(Ingredients) private ingredientModel:typeof Ingredients
    ){}
    async findAll(): Promise<Ingredients[]> {
        return this.ingredientModel.findAll();
        }
        
        async findById(id: number): Promise<Ingredients> {
            return this.ingredientModel.findByPk(id);
          }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pizza } from './pizza.entity';

@Injectable()
export class PizzaService {
    constructor(@InjectModel(Pizza) private readonly pizzaService: typeof Pizza) { }
    
    //function to find pizza whose id is given
    async findOne(id):Promise<Pizza>{
        return this.pizzaService.findOne({where:{id:id}})
    }

    //function that returns all the pizza
    async findAll(){
        return this.pizzaService.findAll();
    }
}

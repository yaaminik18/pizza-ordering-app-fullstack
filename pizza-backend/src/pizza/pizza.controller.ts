import { Controller, Get } from '@nestjs/common';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
    constructor(private readonly pizzaService:PizzaService){}
    @Get()
    async findALLpizza(){
    return this.pizzaService.findAll()}
}

import { Injectable, NotFoundException } from '@nestjs/common';
import {  CartItem } from './cart.entity';
import { InjectModel } from '@nestjs/sequelize';
import { PizzaService } from 'src/pizza/pizza.service';
import { Pizza } from 'src/pizza/pizza.entity';
import { CartDto } from './cart.dto';
import { IngredientsService } from 'src/ingredients/ingredients.service';
import { Ingredients } from 'src/ingredients/ingredients.entity';
import { where } from 'sequelize';

@Injectable()
export class CartService {
    constructor(
     @InjectModel(CartItem)private readonly cartModel: typeof CartItem,
      private readonly pizzaService:PizzaService,
      private readonly ingredientService:IngredientsService
    ){}

    async findAll(){
      return this.cartModel.findAll()
    }

   async addToCart( userId:number,cartDto:CartDto){
    const cart = await this.getOrCreateCartForUser(userId);
    
    const pizza_in_cart=await this.pizzaService.findOne(cartDto.pizzaId)
    //console.log(pizza_in_cart.name)

    const toppings = await Ingredients.findAll({where: { id: cartDto.ingredients },});

    //steps to find the sum of all the additional toppings
    var sum=0;
    console.log(toppings.length)
    for(var i=0;i<toppings.length;i++){
     sum+=toppings[i].dataValues.price
    }
    console.log(sum);

 
    const item = await this.cartModel.create({
      cartId: cart.id,
      userId:userId,
      quantity: 1,
      pizzaId: pizza_in_cart.id,
      pizzaName:pizza_in_cart.name,
      total_price:pizza_in_cart.price+sum,
      ingredientId: toppings.map((t) => t.id)
      
    });
    return item;
   
  }
   
    async getOrCreateCartForUser(userId: number): Promise<CartItem> {
      // First, try to find an existing cart for the user
      const existingCart = await this.cartModel.findOne({ where: { userId } });
    
      if (existingCart) {
        return existingCart;
      }
    
      // If no existing cart is found, create a new cart for the user
      const newCart = await this.cartModel.create({ userId });
    
      return newCart;
    }


    async getCart(cartId: number): Promise<CartItem[]> {
      const cart = await this.cartModel.findAll({where:{cartId}});
      if (!cart) {
        throw new NotFoundException(`Cart with id ${cartId} not found`);
      }
      return cart;
    }
   
   

  async removeItemFromCart(itemId: number): Promise<void> {
    await this.cartModel.destroy({ where: { id: itemId } });
  }
  

  





}

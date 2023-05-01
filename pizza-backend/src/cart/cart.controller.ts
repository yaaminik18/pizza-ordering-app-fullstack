
import { Controller, Post, Body, Param, Delete, Get, ParseIntPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { Order } from 'src/orders/orders.entity';
import { CartDto } from './cart.dto';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}
@Get()
async findAllCart(){
  return this.cartService.findAll();
}
@Get('/getCart/:id')
async getCartmethod(@Param('id',ParseIntPipe) cart_id:number){
  return this.cartService.getCart(cart_id);
}

  @Post('/add/:id')
  async addToCart(@Param('id',ParseIntPipe) user_id:number,@Body() cartDto:CartDto) {
    return this.cartService.addToCart(user_id,cartDto);
   
  }

 @Delete('delete/:id')
 async deleteFromCart(@Param('id') id:number){
  return this.cartService.removeItemFromCart(id)
 }
}
import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
constructor(private readonly orderService: OrdersService) {}
@Post(':id')
async placeOrder(@Param("id",ParseIntPipe)cart_id:number){
    return this.orderService.placeOrder(cart_id)
}
@Get('/get/:user_id')
async getOrderById(@Param("user_id",ParseIntPipe)user_id:number){
    return this.orderService.getOrder(user_id)
}

}

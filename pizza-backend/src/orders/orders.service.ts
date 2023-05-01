import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
;
import { CartItem } from '../cart/cart.entity';
import { Order } from './orders.entity';
import { CartService } from 'src/cart/cart.service';


@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)private orderService: typeof Order,
    private readonly cartService:CartService
  ) {}

  async placeOrder(cartId: number): Promise<Order> {
    const cartItems = await CartItem.findAll({where: { cartId}});
    if (!cartItems) {
      throw new Error(`Cart with ID ${cartId} not found.`);
    }
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.total_price;
    }, 0);
    // Create a new order with the calculated total price and associated cart items
    const order = await this.orderService.create({
      userId: cartItems[0].userId,  //since we have same userid for all
      items: cartItems,
      total: totalPrice,
      ordered_pizza:cartItems.map((item) => item.pizzaName)
    });
    console.log(order)
    // Update the cart items to associate them with the new order
    

      //destroy rows of cart
      const cart= await CartItem.findAll({where:{cartId}})
      await Promise.all(cart.map((item) => item.destroy()));

    return order;
}

  async getOrder(userId: number): Promise<Order[]> {
    return this.orderService.findAll({where:{userId}})
  }
}

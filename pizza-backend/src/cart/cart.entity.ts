import { Model, Column, Table, ForeignKey, HasMany, BelongsTo,DataType } from 'sequelize-typescript';
import { Order } from 'src/orders/orders.entity';



@Table
export class CartItem extends Model {
  
  @Column
  cartId:number;
  //foreign key for order
  @ForeignKey(() => Order)

  @Column
  userId:number;

  @Column
  quantity: number;

  @Column
  pizzaId: number;

  @Column
  pizzaName:string
  
  @Column
  total_price:number

  @Column({
    type:DataType.ARRAY(DataType.INTEGER)
  })
 ingredientId:number[]

 @BelongsTo(() => Order)
 order: Order;
  
 timestamps:false
}

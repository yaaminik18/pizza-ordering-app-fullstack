import { Model, Column, Table, HasMany, BelongsTo, DataType, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { CartItem } from 'src/cart/cart.entity';
import { Users } from 'src/users/users.entity';

@Table
export class Order extends Model {
  
  @Column
  userId: number;

  @Column({
    type:DataType.ARRAY(DataType.STRING)
  })
ordered_pizza:string[]
  
  @HasMany(() => CartItem)
  items: CartItem[];

  @Column
  total: number;

}






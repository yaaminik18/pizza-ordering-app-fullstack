import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import { Ingredients } from "src/ingredients/ingredients.entity";

@Table({ tableName: 'pizza' })
export class Pizza extends Model<Pizza> {
  @Column({ primaryKey: true})
  id: number;

  @Column
  name: string;

  @Column
  price: number;
  @Column
  image:string;
  @Column
  description:string
 
}
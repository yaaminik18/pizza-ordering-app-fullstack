import{Table,Column,Model, BelongsToMany} from 'sequelize-typescript'



@Table
export class Ingredients extends Model {
 
  @Column({ allowNull: false ,primaryKey:true})
 id:number;
  
  @Column({ allowNull: false })
 name:string;

  @Column({ allowNull: false })
  price: number;
  

 }
 
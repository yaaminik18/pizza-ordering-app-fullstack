import{Table,Column,Model} from 'sequelize-typescript'

@Table
export class Users extends Model {
 
  @Column({ allowNull: false })
  password:string;
  
  @Column({ allowNull: false })
  email:string;

  @Column({ allowNull: false })
  fullname: string;

  @Column({ allowNull: false })
  gender: string;

}
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
//import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.entity';
import { OrdersService } from './orders.service';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports:[SequelizeModule.forFeature([Order]),CartModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}

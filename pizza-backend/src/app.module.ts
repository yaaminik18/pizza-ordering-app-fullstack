import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {  Users } from './users/users.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Ingredients } from './ingredients/ingredients.entity';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { PizzaModule } from './pizza/pizza.module';
import {  CartItem } from './cart/cart.entity';
import { Pizza } from './pizza/pizza.entity';
import { Order } from './orders/orders.entity';

@Module({
  imports: [AuthModule,UsersModule,IngredientsModule,SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'yaakhushi9',
    database: 'pizzastore',
    autoLoadModels:true,
    models:[Users,Ingredients,CartItem,Pizza,Order],
    synchronize:true
  }), CartModule, OrdersModule, PizzaModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
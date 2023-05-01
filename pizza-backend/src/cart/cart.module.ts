import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { PizzaModule } from 'src/pizza/pizza.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartItem } from './cart.entity';
import { IngredientsModule } from 'src/ingredients/ingredients.module';

@Module({
  imports:[PizzaModule,IngredientsModule,SequelizeModule.forFeature([CartItem])],
  controllers: [CartController],
  providers: [CartService],
  exports:[CartService]
})
export class CartModule {}

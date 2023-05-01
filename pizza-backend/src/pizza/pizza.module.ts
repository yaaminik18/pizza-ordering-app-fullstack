import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { Pizza } from './pizza.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Pizza])],
  controllers: [PizzaController],
  providers: [PizzaService],
  exports:[PizzaService]
})
export class PizzaModule {}

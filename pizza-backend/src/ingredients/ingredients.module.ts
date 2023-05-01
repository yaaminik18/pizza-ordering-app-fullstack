import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { Ingredients } from './ingredients.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Ingredients])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
  exports:[IngredientsService]

})
export class IngredientsModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersDto } from '../dto/users.dto';
import { UsersController } from './users.controller';
import { Users } from './users.entity';

@Module({
    imports:[SequelizeModule.forFeature([Users])],
    providers: [UsersService ],
    controllers:[UsersController],
    exports: [UsersService],
})
export class UsersModule {}
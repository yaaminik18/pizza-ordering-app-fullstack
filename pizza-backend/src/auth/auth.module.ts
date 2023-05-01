import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.stratergy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stratergy';


@Module({
    imports: [
        PassportModule,UsersModule
        ,JwtModule.register({
            secret: "pizza",
            signOptions: { expiresIn: "60s" },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    controllers: [AuthController],
})
export class AuthModule {}
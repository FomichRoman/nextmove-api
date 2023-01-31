import { UserEntity } from './../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { getJwtConfig } from './../config/jwt.config';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    TypeOrmModule.forFeature([UserEntity])
  ]
})
export class AuthModule {}

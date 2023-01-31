import { SubscriptionEntity } from 'src/user/subscriptions.enity';
import { UserEntity } from './user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity, SubscriptionEntity])]
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule {}

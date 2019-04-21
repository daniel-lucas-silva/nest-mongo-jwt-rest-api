import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    CityModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

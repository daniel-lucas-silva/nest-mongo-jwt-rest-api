import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';

@Module({

  imports: [
    UserModule,
    AuthModule,
    CityModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from "./constants/entities";
import { UserModule } from './user/user.module';
import { APP_GUARD } from "@nestjs/core";
import { AuthGuardGuard } from "./guards/auth-guard/auth-guard.guard";
import * as dotenv from 'dotenv';
import { JwtService } from "@nestjs/jwt";
import { ServicesModule } from './services/services.module';
import { ServiceCategoryModule } from './service-category/service-category.module';
dotenv.config();
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pnp',
      entities: Entities,
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    ServicesModule,
    ServiceCategoryModule,
  ],
  controllers: [AppController],
  providers: [
    JwtService,
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardGuard,
    },
  ],
})
export class AppModule {}

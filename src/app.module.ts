import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from "./constants/entities";
import { UserModule } from './user/user.module';
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Falade000.',
      database: 'pnp',
      entities: Entities,
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}

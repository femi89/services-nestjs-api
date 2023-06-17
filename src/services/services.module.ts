import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './entities/service.entity';
import { UserService } from "../user/user.service";
import { Repository } from "typeorm";
import { UserEntity } from "../user/entities/user.entity";
import { ServiceCategoryEntities } from '../service-category/entities/service-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceEntity,
      UserEntity,
      ServiceCategoryEntities,
    ]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService, UserService, Repository],
})
export class ServicesModule {}

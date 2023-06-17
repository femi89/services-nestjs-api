import { Module } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { ServiceCategoryController } from './service-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCategoryEntities } from './entities/service-category.entity';
import { ServiceEntity } from '../services/entities/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCategoryEntities, ServiceEntity])],
  controllers: [ServiceCategoryController],
  providers: [ServiceCategoryService],
})
export class ServiceCategoryModule {}

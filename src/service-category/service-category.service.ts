import { Injectable } from '@nestjs/common';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ServiceCategoryEntities } from "./entities/service-category.entity";

@Injectable()
export class ServiceCategoryService {
  constructor(
    @InjectRepository(ServiceCategoryEntities)
    private repo: Repository<ServiceCategoryEntities>,
  ) {}
  async create(createServiceCategoryDto: CreateServiceCategoryDto) {
    this.repo.create(createServiceCategoryDto);
    await this.repo.save(createServiceCategoryDto);
    return 'service Created';
  }

  async findAll() {
    return await this.repo.find({
      loadEagerRelations: true,
      relations: {
        services: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceCategory`;
  }

  update(id: number, updateServiceCategoryDto: UpdateServiceCategoryDto) {
    return `This action updates a #${id} serviceCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceCategory`;
  }
}

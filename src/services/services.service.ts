import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './entities/service.entity';
import { UserService } from '../user/user.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceEntity) private repo: Repository<ServiceEntity>,
    private readonly userService: UserService,
  ) {}
  async create(createServiceDto: CreateServiceDto, req?: Request) {
    const user = await this.userService.getUser(req['user']);
    const serviceObj = new ServiceEntity();
    const sObj = Object.assign(serviceObj, createServiceDto);
    sObj['user_id'] = user.id;
    sObj['image'] = faker.image.fashion();
    // sObj['service_category_id'] = user.id;
    this.repo.create(sObj);
    await this.repo.save(sObj);
    return 'Service Created Successfully';
  }

  async findAll() {
    return await this.repo.find({
      relations: {
        service_category: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.repo.find({
      where: {
        id: id,
      },
      relations: {
        service_category: true,
      },
    });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto, req?: Request) {
    const user = await this.userService.getUser(req['user']);
    const serviceObj = new ServiceEntity();
    const sObj = Object.assign(serviceObj, updateServiceDto);
    sObj['user_id'] = user.id;
    sObj['id'] = id;
    // sObj['service_category_id'] = user.id;
    this.repo.create(sObj);
    await this.repo.save(sObj);
    return `Service Update successfully`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}

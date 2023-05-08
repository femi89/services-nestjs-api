import { Injectable, Req } from "@nestjs/common";
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { ServiceEntity } from './entities/service.entity';
import { UserService } from "../user/user.service";

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceEntity) private repo: Repository<ServiceEntity>,
    private readonly userService: UserService,
  ) {}
  create(createServiceDto: CreateServiceDto, @Req() req?: Request) {
    const user = this.userService.getUser(req['user']);
    console.log(user);

    return 'This action adds a new service';
  }

  async findAll() {
    return await this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}

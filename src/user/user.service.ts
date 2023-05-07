import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const userEntity = new User();
    userEntity.password = createUserDto.password;
    userEntity.firstName = createUserDto.firstName;
    userEntity.email = createUserDto.email;
    userEntity.lastName = createUserDto.lastName;
    this.repo.create(userEntity);
    return this.repo.save(userEntity);
  }

  async findAll() {
    return await this.repo.find();
  }

  findOne(id: number) {
    console.log(id);
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserWithField(email: string) {
    if (!email) {
      return '';
    }
    return this.repo.findOne({
      where: { email: email },
    });
  }
}

import { BadRequestException, Injectable } from "@nestjs/common";
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) {}

  async create(createUserDto: any) {
    const userEntity = new UserEntity();
    const hash = await bcrypt.hash(createUserDto.password, 10);
    userEntity.password = hash;
    userEntity.firstName = createUserDto.firstName;
    userEntity.email = createUserDto.email;
    userEntity.lastName = createUserDto.lastName;
    const user = await this.findUserWithField(createUserDto.email);
    if (user) {
      throw new BadRequestException('Email already in use');
    }
    this.repo.create(userEntity);
    await this.repo.save(userEntity);
    return 'Account Created Successfully';
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

  async getUser(username: string) {
    return await this.repo.findOneBy({ email: username });
  }

  async getProfile() {

  }
}

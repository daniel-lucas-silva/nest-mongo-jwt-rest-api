import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, getMongoRepository } from 'typeorm';

import { UserEntity } from './user.entity';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: MongoRepository<User>) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(findOneOptions): Promise<User> {
    return await  getMongoRepository(UserEntity).findOne(findOneOptions);
  }

  async create(dto: CreateUserDto): Promise<User> {
    const {username, email, password} = dto;

    const newUser = new UserEntity();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;

    const errors = await validate(newUser);

    if (errors.length > 0) {
      const _errors = {username: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);
    } else {
      const savedUser = await this.userRepository.save(newUser);
      return savedUser;
    }
  }

  async update() {}

  async delete() {}

  async findById(id) {
    return {};
  }

  async findByEmail() {}

  async userExistsExcludingItself() {}

  async userExists() {}
}

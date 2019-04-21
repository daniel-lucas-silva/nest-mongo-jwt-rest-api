import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

  async findAll() {}

  async findOne() {}

  async create() {}

  async update() {}

  async delete() {}

  async findById() {}

  async findByEmail() {}

  async userExistsExcludingItself() {}

  async userExists() {}
}

import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService) { }

  generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    }, process.env.JWT_SECRET);
  }

  async validateUser(payload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return { payload };
  }

  async blockUser() { }

  async findUser(findOptions: object) {
    return await this.userService.findOne(findOptions);
  }

  public async signUp(dto: RegisterDto) {
    const { username, email } = dto;

    const user = await this.userService.findOne({ $or: [ { username }, { email } ] });

    if (user) {
      const errors = {username: 'Username and email must be unique.'};
      throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);
    }

    // create new user
    return this.userService.create(dto)
      .then(user => {
        // send mail
        return {
          token: this.generateToken(user),
        };
      });
  }

  async checkPassword(password, user) {
    return await compareSync(password, user.password);
  }
}

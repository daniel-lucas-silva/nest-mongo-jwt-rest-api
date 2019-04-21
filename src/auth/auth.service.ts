import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken() {
    const user: JwtPayload = { email: 'test@email.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return { payload };
  }

  async saveUserAccessAndReturnToken() {}

  async blockUser() {}

  async saveLoginAttemptsToDB() {}

  async blockIsExpired() {}

  async checkLoginAttemptsAndBlockExpires() {}

  async passwordsDoNotMatch() {}

  async registerUser() {}

  async returnRegisterToken() {}

  async verificationExists() {}

  async verifyUser() {}

  async markResetPasswordAsUsed() {}

  async findUserToResetPassword() {}

  async updatePassword() {}

  async findForgotPassword() {}

  async saveForgotPassword() {}

  async forgotPasswordResponse() {}

  async checkPermissions() {}

  async getUserIdFromToken() {}
}

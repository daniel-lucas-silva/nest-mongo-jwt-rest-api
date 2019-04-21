import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

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

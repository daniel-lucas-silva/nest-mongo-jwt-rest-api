import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, Query, UseGuards, HttpException, ValidationPipe, Response, Res, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(201)
  async login(@Body() userData: LoginDto) {
    try {
      const _user = await this.authService.findUser({ email: userData.email });
      const errors = {User: ' not found'};
      if (!_user) { throw new HttpException({errors}, 401); }

      const isPasswordMatch = await this.authService.checkPassword(userData.password, _user);
      if (isPasswordMatch) {
        const token = await this.authService.generateToken(_user);
        const {email, username} = _user;
        const user = {email, token, username};
        return {
          status: 'Success',
          data: {
            user,
          },
        };
      }
      console.log(isPasswordMatch);
    } catch (error) {
      // throw error
      throw new HttpException(error.message, 400);
    }
  }

  @Post('register')
  @HttpCode(204)
  async register(@Body(ValidationPipe) userData: RegisterDto) {
    return await {
      status: 'Success',
      data: this.authService.signUp(userData),
    };
  }

  @Post('verify')
  async verify(@Body() userData) {}

  @Post('forgot')
  async forgotPassword(@Body() userData) {}

  @Post('reset')
  async resetPassword(@Body() userData) {}

  @Get()
  async getRefreshToken() {

  }
}

import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  @Post()
  async login(@Body() userData) {}

  @Post()
  async register(@Body() userData) {}

  @Post()
  async verify(@Body() userData) {}

  @Post()
  async forgotPassword(@Body() userData) {}

  @Post()
  async resetPassword(@Body() userData) {}

  @Get()
  @UseGuards(AuthGuard())
  async getRefreshToken() {}
}

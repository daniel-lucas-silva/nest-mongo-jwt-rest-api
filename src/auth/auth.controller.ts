import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, Query } from '@nestjs/common';

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

  @Post()
  async getRefreshToken(@Body() userData) {}
}

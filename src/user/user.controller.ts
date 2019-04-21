import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, Query } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiBearerAuth()
@ApiUseTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ title: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.'})
  @Get()
  async findAll(@Query() query) {}

  @Get(':username')
  async findOne(@Param('username') username) {}

  @ApiOperation({ title: 'Create user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(@Body() userData) {}

  @ApiOperation({ title: 'Update user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':username')
  async update(@Param() params, @Body() userData) {}

  @ApiOperation({ title: 'Delete user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully deleted.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':username')
  async delete(@Param() params) {}
}

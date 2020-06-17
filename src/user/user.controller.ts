import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('users/:id')
  getUser(@Param('id') userId: string) {
    return this.userService.getUser(userId);
  }

  @Post('users')
  createUser(@Body() user) {
    return this.userService.createUser(user);
  }

  @Put('users/:id')
  updateUser(@Param('id') userId: string, @Body() user) {
    return this.userService.updateUser(userId, user);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') userId: string) {
    return this.userService.deleteUser(userId);
  }
}

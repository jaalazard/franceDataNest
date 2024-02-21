import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);

    return;
  }
}

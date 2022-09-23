import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import CreateUserDto from './dtos/create-user.dto';
import { Student } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Student> {
    return this.userService.findOne(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() body: Student) {
    return this.userService.update(params.id, body);
  }

  @Delete(':id')
  async remove(@Param() params) {
    return this.userService.destroy(params.id);
  }

  @Get('books/:id')
  getBooks(@Param() params) {
    return this.userService.getBooksOfStudent(params.id);
  }
}

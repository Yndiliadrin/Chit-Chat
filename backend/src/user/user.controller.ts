import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseUUIDPipe,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  getAll() {
    return this.service.getUsers();
  }

  @Get(':uuid')
  get(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.service.getUser(uuid);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  @Post('/login')
  login() {
    console.log("heyya");

    return this.service.loginUser();
  }

  @Post('/uploadImage')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads/' }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.service.uploadFile(file.filename);
  }

  @Delete(':uuid')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.uuid);
  }
}

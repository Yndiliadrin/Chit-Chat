/**
 * This file contains the UserController class
 * @author Yndiliädrin
 * @module User
 */
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
  UseGuards,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Request } from '@nestjs/common';
import { AuthService } from './../auth/auth.service';
import { LocalAuthGuard } from './../auth/local-auth.guard';

/**
 * @description This is the class which handle the userinteractions
 */
@Controller('user')
export class UserController {
  /**
   * @param service Objectifyed UserService
   * @param authService Objectifyed Authservice
   */
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

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    console.log('==================================');

    return req.user;
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

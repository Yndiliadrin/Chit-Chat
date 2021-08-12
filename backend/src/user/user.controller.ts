/**
 * This file contains the UserController class
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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * @author Yndiliädrin
 * @description This is the class which handle the userinteractions
 */
@Controller('user')
export class UserController {
  /**
   * 
   * @param service Objectifyed UserService
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

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return "";
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
import { Message } from './message.entity';
import { MessageService } from './message.service';
import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * Controller for the Messages roots and functions
 */
@Controller('message')
export class MessageController {
  constructor(private service: MessageService) {}

  /**
   * 
   * @returns this.service.getAll()
   */
  @Get()
  getAll() {
    return this.service.getAll();
  }

  /**
   * 
   * @param file If the user uploaded a file, than it will be this param
   * @param body The multipart/form-data other fields
   * @returns `Message` object
   */
  @Post()
  @UseInterceptors(FileInterceptor('file', { dest: './uploads/' }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: Body) {
    if (file) {
      const msg = body as unknown as Message;
      msg.content = "http://localhost:3000/uploads/"+file.filename;
      msg.type = "img";
      return this.service.save(msg)
    }
    return this.service.save(body as unknown as Message);
  }
}

import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'graceful-fs';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('uploads/:id')
  returnIMG(@Param('id') id: string): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'uploads/'+id));
    return new StreamableFile(file);
  }
}

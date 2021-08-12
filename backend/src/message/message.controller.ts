import { Message } from './message.entity';
import { MessageService } from './message.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  constructor(private service: MessageService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  sendMessages(@Body() message: Message) {
    console.log(message);
    
    return this.service.save(message);
  }
}

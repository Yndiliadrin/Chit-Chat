import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}


  async getAll(): Promise<Message[]> {
      return this.messageRepository.find();
  }

  async save(message: Message): Promise<Message> {
    console.log(message);
    
    return this.messageRepository.save(message);
  }
}

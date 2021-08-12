import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
  /**
   * 
   * @param messageRepository This `Repository` object will handle the database interactions
   */
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}

  /**
   * 
   * @returns Array of `Message` objects
   */
  async getAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  /**
   * 
   * @param message A `Message` object which I want to save
   * @returns The saved `Message` object extended with the uuid
   */
  async save(message: Message): Promise<Message> {
    return this.messageRepository.save(message);
  }
}

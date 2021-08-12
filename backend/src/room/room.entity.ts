import { PrimaryGeneratedColumn } from 'typeorm';
export class Room {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}

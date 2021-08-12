import { Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity({ name: 'Message', synchronize: false })
export class Message {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  sender: string;

  @Column()
  receiver: string;

  @Column()
  type: string;

  @Column()
  content: string;

  /*
    @TO-DO The SHOULD be sent by the frontend
  */
  @CreateDateColumn({ type: 'date', default: () => Date.now() })
  sendedAt: Date;
}

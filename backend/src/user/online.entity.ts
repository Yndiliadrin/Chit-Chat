import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity({ name: 'Online', synchronize: false })
export class Online {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  session: string;

  @Column()
  userID: string;
}

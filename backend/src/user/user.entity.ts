import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity({ name: 'User', synchronize: false })
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  salt: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_admin: boolean;
}

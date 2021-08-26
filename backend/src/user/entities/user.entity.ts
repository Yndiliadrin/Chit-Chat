import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, this.salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

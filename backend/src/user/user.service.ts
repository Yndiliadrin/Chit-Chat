import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { Session } from 'inspector';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    console.log('Listing all user... ');

    return await this.userRepository.find();
  }

  async findOne(_username: string): Promise<User | undefined> {
    console.log("DEBUG: user.service@findOnde(%s)", _username);
   
    var user = undefined

    try {
      user = await getManager()
      .createQueryBuilder(User, 'user')
      .where('user.username = :username', { username: _username })
      .getOne();      
    } catch(err) {
      console.log(err);
    }
    
    console.log(user);
      
    return user as User;
  }

  async getUser(_id: string): Promise<User> {
    const user = await getManager()
      .createQueryBuilder(User, 'user')
      .where('user.uuid = :id', { id: _id })
      .getOne();
    return user as User;
  }

  async createUser(user: User): Promise<User> {
    const saltRounds = 10;
    user.password = await new Promise((resolve, reject) => {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        user.salt = salt;
        if (err) reject(err);
        bcrypt.hash(user.password, user.salt, (err, hash) => {
          if (err) reject(err);
          resolve(hash);
        });
      });
    });
    return this.userRepository.save(user);
  }

  async deleteUser(_id: string): Promise<void> {
    this.userRepository.delete(_id);
  }

  async loginUser(): Promise<Session> {
    return new Session();
  }

  async uploadFile(file: string): Promise<void> {
    console.log(file);
  }
}

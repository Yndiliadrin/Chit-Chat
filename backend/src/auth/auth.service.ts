import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log('DEBUG: auth.service@validateUser()');

    const user = await this.userService.findOne(username);
    
    return await bcrypt.compare(password, user.password);
  }

  async login(user: any) { 
    const payload = {username: user.username, sub:user.uuid};
    return {
      acces_token: this.jwtService.sign(payload)
    };
  }
}

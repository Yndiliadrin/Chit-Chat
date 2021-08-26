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
    
    return (await bcrypt.compare(password, user.password) ? user : null);
  }

  async login(user: any) {
    console.log("DEBUG: auth.service@login("+user+")");
    
    const payload = {username: user.username, sub:user.uuid};
    return {
      login_at: new Date(),
      username: user.username,
      acces_token: this.jwtService.sign(payload)
    };
  }
}

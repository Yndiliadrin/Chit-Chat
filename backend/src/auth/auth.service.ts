import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {    
    const user = await this.userService.findOne(username);
    bcrypt.hash(pass, user.salt, function(err, hash) {
      bcrypt.compare(hash, user.password, function (err, result) {
        console.log(result);
        return true;
      });
    });
  }
}

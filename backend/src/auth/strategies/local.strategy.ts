import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log("DEBUG: local.strategy@validate(%s, %s)", username, password);
    
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      console.log(user);
      
      throw new UnauthorizedException();
    }
    console.log("DEBUG: local.strategy@validate([...])");
    
    return user;
  }
}

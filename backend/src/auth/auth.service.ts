import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './models/UserPayload';

type LocalUser = {
  username: string;
};
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  validateUser(username: string, password: string) {
    if (username !== 'desafiosharenergy' || password !== 'sh@r3n3rgy') {
      throw new Error('username ou senha incorretos!');
    }
    return { username };
  }
  login({ username }: LocalUser) {
    const payload: UserPayload = {
      username,
    };
    const jwt = this.jwtService.sign(payload);
    return { accessToken: jwt };
  }
}

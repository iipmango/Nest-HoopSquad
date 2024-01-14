import { Injectable } from '@nestjs/common';
import { TokenModule } from './token/token.module';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: TokenModule) {}

  validate(token: string) {}
}

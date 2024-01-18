import { Injectable } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { TokenService } from './token/token.service';
import { getRepository } from 'typeorm';
import { user } from './entities/auth.entity';
import { userRepository } from './entities/authEntityRepo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: TokenService,
    @InjectRepository(userRepository)
    private user: userRepository,
  ) {}

  validate(token: string) {
    const { id, type } = this.jwt.verifyToken(token);

    const userData = getRepository(user);
  }
}

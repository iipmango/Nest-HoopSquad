import { Injectable } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { TokenService } from './token/token.service';
import { userRepository } from './repository/authEntityRepo';
import { InjectRepository } from '@nestjs/typeorm';
import { authDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: TokenService,
    @InjectRepository(userRepository)
    private userData: userRepository,
  ) {}

  async validate(token: string) {
    const { id, type } = this.jwt.verifyToken(token);

    await this.userData.findOneOrFail(id);

    return true;
  }

  async register(userData: authDto) {}
}

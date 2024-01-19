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
    const id = this.jwt.verifyToken(token);

    await this.userData.validate(id);

    return true;
  }

  async register(userData: authDto) {
    const newUserId = await this.userData.register(userData);

    const newUserToken = this.jwt.createAllToken(newUserId);

    return {
      accessToken: newUserToken.access,
      refreshToken: newUserToken.refresh,
    };
  }

  async logIn(userData: authDto) {
    const user = await this.userData.logIn(userData);
    const userToken = this.jwt.createAllToken(user.id);

    return {
      accessToken: userToken.access,
      refreshToken: userToken.refresh,
    };
  }

  async change(userData: authDto, token: string) {
    const id = this.jwt.verifyToken(token);
    await this.userData.change(userData, id);

    const updatedToken = this.jwt.createAllToken(id);
    return {
      accessToken: updatedToken.access,
      refreshToken: updatedToken.refresh,
    };
  }
}

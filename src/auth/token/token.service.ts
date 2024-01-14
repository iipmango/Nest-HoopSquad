import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  createAccessToken(id: number) {
    const accessToken = this.jwtService.sign(
      {
        id: id,
        type: 'access',
      },
      {
        secret: this.config.get<string>('JWT_SECRET_KEY'),
        expiresIn: '2h',
      },
    );

    return accessToken;
  }
  createRefreshToken(id: number) {
    const refreshToken = this.jwtService.sign(
      {
        id: id,
        type: 'refresh',
      },
      {
        secret: this.config.get<string>('JWT_SECRET_KEY'),
        expiresIn: '14d',
      },
    );
    return refreshToken;
  }
  createAllToken(id: number) {
    const accessToken = this.createAccessToken(id);
    const refreshToken = this.createRefreshToken(id);

    return { access: accessToken, refresh: refreshToken };
  }
  verifyToken(token: string) {
    const decodedToken = this.jwtService.verify(token, {
      secret: this.config.get<string>('JWT_SECRET_KEY'),
    });

    return decodedToken;
  }

  refreshAccessToken(id: number) {
    return this.createAccessToken(id);
  }
}

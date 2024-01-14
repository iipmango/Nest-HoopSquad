import { Test, TestingModule } from '@nestjs/testing';
import { TokenService } from './token.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

describe('TokenService', () => {
  let service: TokenService;
  let accessToken;
  let refreshToken;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, JwtModule],
      providers: [TokenService],
    }).compile();

    service = module.get<TokenService>(TokenService);
    accessToken = service.createAccessToken(1);
    refreshToken = service.createRefreshToken(1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('accessToken id & type', () => {
    const res = service.verifyToken(accessToken);
    expect(res.id).toBeDefined;
    expect(res.type).toBeDefined;
  });
  it('refreshToken id & type', () => {
    const res = service.verifyToken(refreshToken);
    expect(res.id).toBeDefined;
    expect(res.type).toBeDefined;
  });
});

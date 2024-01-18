import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: authDto) {
    return await this.authService.register(userData);
  }

  @Post('login')
  async login(@Body() userData: authDto) {
    return await this.authService.logIn(userData);
  }

  @Get()
  validation(@Query('authorization') authorization: string) {
    const token = authorization.slice(7, authorization.length);
    return this.authService.validate(token);
  }
}

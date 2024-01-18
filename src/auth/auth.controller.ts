import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async register(@Body() userData: authDto) {
    await this.authService.register(userData);
  }

  @Get()
  validation(@Query('authorization') authorization: string) {
    const token = authorization.slice(7, authorization.length);
    return this.authService.validate(token);
  }
}

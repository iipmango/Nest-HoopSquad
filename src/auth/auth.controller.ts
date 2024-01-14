import { Controller, Get, Param, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  validation(@Query('authorization') authorization: string) {
    const token = authorization.slice(7, authorization.length);
    this.authService.validate(token);
  }
}

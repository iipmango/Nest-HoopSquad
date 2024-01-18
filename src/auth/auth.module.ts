import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenModule } from './token/token.module';
import { userRepository } from './repository/authEntityRepo';

@Module({
  imports: [TypeOrmModule.forFeature([userRepository]), TokenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { auth } from './entities/auth.entity';
import { TokenModule } from './token/token.module';

@Module({
  imports: [TypeOrmModule.forFeature([auth]), TokenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

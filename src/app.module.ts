import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { user } from './auth/entities/auth.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ipmango.direct.quickconnect.to',
      port: 5010,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: 'localhoopsquad',
      entities: [user],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

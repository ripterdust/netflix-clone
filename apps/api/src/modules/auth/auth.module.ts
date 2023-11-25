import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: config.jwt.secret,
      signOptions: {},
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

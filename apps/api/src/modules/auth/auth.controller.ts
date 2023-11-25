import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { hash } from 'bcrypt';
import { handleResponse } from 'src/core/utils/response.util';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: Record<string, any>) {
    if (!body.password) {
      throw new ForbiddenException();
    }
    const password: string = await hash(String(body.password), 10);

    const user: User = {
      username: String(body.username),
      email: String(body.email),
      name: String(body.name),
      password,
    };

    const token = await this.authService.register(user);

    return handleResponse(token);
  }
}

import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { hash } from 'bcrypt';
import { handleResponse } from 'src/core/utils/response.util';
import { Public } from 'src/core/guards/public.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
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

  @Public()
  @Post('login')
  async login(@Body() body: Record<string, any>) {
    const token = await this.authService.login({
      email: String(body.email),
      password: String(body.password),
    });
    return handleResponse(token);
  }
}

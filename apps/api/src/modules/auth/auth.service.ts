import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(user: User) {
    const userQuery = await this.usersService.create(user);

    const payload = {
      id: userQuery.id,
      username: user.username,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
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

  async login({ email, password }: { email: string; password: string }) {
    const userQuery = await this.usersService.findByEmail(email);

    if (!userQuery) {
      throw new UnauthorizedException();
    }
    const passwordMatch = await compare(password, userQuery?.password);

    if (!passwordMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: userQuery.id,
      username: userQuery.username,
      email: userQuery.email,
    };

    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}

import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(user: User): Promise<string>;
    login({ email, password }: {
        email: string;
        password: string;
    }): Promise<string>;
}

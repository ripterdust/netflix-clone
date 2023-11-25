import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    create(user: User): Promise<User>;
}

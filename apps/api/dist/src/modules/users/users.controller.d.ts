import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    index(): Promise<import("./user.entity").User[]>;
}

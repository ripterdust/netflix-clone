import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: Record<string, any>): Promise<{
        data: any;
        statusCode: number;
    }>;
    login(body: Record<string, any>): Promise<{
        data: any;
        statusCode: number;
    }>;
}

import { ShowsService } from './shows.service';
export declare class ShowsController {
    private showsService;
    constructor(showsService: ShowsService);
    find(): Promise<{
        data: any;
        statusCode: number;
    }>;
}

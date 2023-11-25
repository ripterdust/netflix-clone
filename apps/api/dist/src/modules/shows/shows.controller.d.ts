import { ShowsService } from './shows.service';
import { ImagesService } from '../images/images.service';
export declare class ShowsController {
    private showsService;
    private imageService;
    constructor(showsService: ShowsService, imageService: ImagesService);
    find(): Promise<{
        data: any;
        statusCode: number;
    }>;
    create(body: Record<string, any>): Promise<{
        data: any;
        statusCode: number;
    }>;
    findById(id: number): Promise<{
        data: any;
        statusCode: number;
    }>;
}

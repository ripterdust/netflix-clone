/// <reference types="multer" />
export declare class ImagesController {
    store(file: Express.Multer.File): Promise<{
        data: any;
        statusCode: number;
    }>;
}

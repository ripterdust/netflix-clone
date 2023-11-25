/// <reference types="multer" />
import { Response } from 'express';
export declare class ImagesController {
    store(file: Express.Multer.File): Promise<{
        data: any;
        statusCode: number;
    }>;
    serveImage(imageName: string, res: Response): void;
}

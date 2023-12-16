import { Injectable } from '@nestjs/common';
import { moveFileToStorage } from 'src/core/utils/file.util';

@Injectable()
export class ImagesService {
  moveFileFromTempToBlobs(fileName: string): void {
    moveFileToStorage(fileName);
  }
}

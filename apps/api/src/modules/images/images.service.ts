import { Injectable } from '@nestjs/common';
import { getTemporalDir } from 'src/core/utils/os.util';
import { join } from 'path';
import { copyFileSync, existsSync, mkdirSync, unlinkSync } from 'fs';

@Injectable()
export class ImagesService {
  moveFileFromTempToBlobs(fileName: string): void {
    const tempDir = join(getTemporalDir(), fileName);
    const destinationFolder = join(__dirname, '../../../../', 'uploads');

    if (!existsSync(destinationFolder)) {
      mkdirSync(destinationFolder);
    }

    const destinationFilePath = join(destinationFolder, fileName);

    copyFileSync(tempDir, destinationFilePath);

    unlinkSync(tempDir);
  }
}

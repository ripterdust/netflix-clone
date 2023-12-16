import { copyFileSync, existsSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';
import { getTemporalDir } from './os.util';

export const moveFileToStorage = (fileName: string) => {
  const tempDir = join(getTemporalDir(), fileName);
  const destinationFolder = join(__dirname, '../../../../', 'uploads');

  if (!existsSync(destinationFolder)) {
    mkdirSync(destinationFolder);
  }

  const destinationFilePath = join(destinationFolder, fileName);

  copyFileSync(tempDir, destinationFilePath);

  unlinkSync(tempDir);
};

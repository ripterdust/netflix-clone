import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { getTemporalDir } from 'src/core/utils/os.util';
import { handleResponse } from 'src/core/utils/response.util';

@Controller('images')
export class ImagesController {
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: getTemporalDir(),
        filename: (_, file, cb) => {
          const extension = file.originalname.split('.').at(-1);
          const fileName = `${Date.now()}.${extension}`;
          cb(null, fileName);
        },
      }),
    }),
  )
  @Post()
  async store(@UploadedFile() file: Express.Multer.File) {
    const { filename } = file;
    return handleResponse({ filename });
  }
}

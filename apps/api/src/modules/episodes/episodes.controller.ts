import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BaseController } from 'src/core/base/base.controller';
import { Episode } from './episodes.entity';
import { BaseService } from 'src/core/base/base.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { EpisodesService } from './episodes.service';
import { diskStorage } from 'multer';
import { getTemporalDir } from 'src/core/utils/os.util';
import { handleResponse } from 'src/core/utils/response.util';
import * as ffmpeg from 'fluent-ffmpeg';

@Controller('episodes')
export class EpisodesController extends BaseController<Episode> {
  constructor(private readonly episodesService: EpisodesService) {
    super();
  }

  getService(): BaseService<Episode> {
    return this.episodesService;
  }

  @Post('convert')
  @UseInterceptors(
    FileInterceptor('video', {
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
  async storeVideo(@UploadedFile() video: Express.Multer.File) {
    const videoPath = video.path;
    const hlsOutputPath = './';
    try {
      await ffmpeg(videoPath)
        .outputOptions('-c:v h264')
        .outputOptions('-hls_time 10')
        .outputOptions('-hls_list_size 6')
        .outputOptions(`-start_number 0`)
        .output(hlsOutputPath);

      return hlsOutputPath;
    } catch (err) {
      new InternalServerErrorException(handleResponse(err));
    }
  }
}

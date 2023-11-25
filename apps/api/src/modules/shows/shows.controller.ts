import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { handleResponse } from 'src/core/utils/response.util';
import { ShowsService } from './shows.service';
import { Shows } from './shows.entity';
import { ImagesService } from '../images/images.service';
import { Public } from 'src/core/guards/public.guard';

@Controller('shows')
export class ShowsController {
  constructor(
    private showsService: ShowsService,
    private imageService: ImagesService,
  ) {}

  @Public()
  @Get('')
  async find() {
    const shows = await this.showsService.getAll();
    return handleResponse(shows);
  }

  @Post('create')
  async create(
    @Body()
    body: Record<string, any>,
  ) {
    const coverImage = String(body.cover);
    this.imageService.moveFileFromTempToBlobs(coverImage);

    const show: Shows = {
      name: String(body.name),
      description: String(body.description),
      releaseDate: new Date(body.releaseDate),
      categories: Number(body.categories),
      coverImage,
    };
    const storedShow = await this.showsService.create(show);

    return handleResponse(storedShow);
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const show = await this.showsService.getById(id);

    if (!show) {
      throw new NotFoundException(`Element with id ${id} not found`);
    }

    return handleResponse(show);
  }
}

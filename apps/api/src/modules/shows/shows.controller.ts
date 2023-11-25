import { Body, Controller, Get, Post } from '@nestjs/common';
import { handleResponse } from 'src/core/utils/response.util';
import { ShowsService } from './shows.service';
import { Shows } from './shows.entity';

@Controller('shows')
export class ShowsController {
  constructor(private showsService: ShowsService) {}

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
    const show: Shows = {
      name: String(body.name),
    };

    const storedShow = await this.showsService.create(show);
    return handleResponse(storedShow);
  }
}

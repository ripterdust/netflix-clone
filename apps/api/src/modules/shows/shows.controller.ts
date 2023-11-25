import { Controller, Get } from '@nestjs/common';
import { handleResponse } from 'src/core/utils/response.util';
import { ShowsService } from './shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private showsService: ShowsService) {}

  @Get('')
  async find() {
    const shows = await this.showsService.getAll();
    return handleResponse(shows);
  }
}

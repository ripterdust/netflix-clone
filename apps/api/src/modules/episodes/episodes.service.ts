import { BaseService } from 'src/core/base/base.service';
import { Episode } from './episodes.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class EpisodesService extends BaseService<Episode> {
  constructor(
    @InjectRepository(Episode)
    private episode: Repository<Episode>,
  ) {
    super();
  }
  getRepository(): Repository<Episode> {
    return this.episode;
  }
}

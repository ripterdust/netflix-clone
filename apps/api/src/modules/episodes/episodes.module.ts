import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './episodes.entity';
import { EpisodesService } from './episodes.service';

@Module({
  controllers: [EpisodesController],
  imports: [TypeOrmModule.forFeature([Episode])],
  providers: [EpisodesService],
})
export class EpisodesModule {}

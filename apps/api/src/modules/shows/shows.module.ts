import { Module } from '@nestjs/common';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shows } from './shows.entity';

@Module({
  controllers: [ShowsController],
  providers: [ShowsService],
  imports: [TypeOrmModule.forFeature([Shows])],
})
export class ShowsModule {}

import { Module } from '@nestjs/common';
import { ShowsController } from './shows.controller';
import { ShowsService } from './shows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shows } from './shows.entity';
import { ImagesModule } from '../images/images.module';

@Module({
  controllers: [ShowsController],
  providers: [ShowsService],
  imports: [TypeOrmModule.forFeature([Shows]), ImagesModule],
})
export class ShowsModule {}

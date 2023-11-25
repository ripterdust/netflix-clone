import { BadRequestException, Injectable } from '@nestjs/common';
import { Shows } from './shows.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Shows)
    private showsRepository: Repository<Shows>,
  ) {}

  async getAll() {
    return this.showsRepository.find();
  }

  async create(show: Shows) {
    const createdShow = this.showsRepository.create(show);

    const validator = await validate(createdShow);

    if (validator.length > 0) {
      throw new BadRequestException(validator);
    }

    return await this.showsRepository.save(createdShow);
  }
}

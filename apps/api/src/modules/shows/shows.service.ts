import { Injectable } from '@nestjs/common';
import { Shows } from './shows.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Shows)
    private showsRepository: Repository<Shows>,
  ) {}

  async getAll() {
    return this.showsRepository.find();
  }
}

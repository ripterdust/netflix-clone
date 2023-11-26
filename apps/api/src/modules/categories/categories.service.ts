import { BaseService } from 'src/core/base/base.service';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService extends BaseService<Category> {
  constructor(
    @InjectRepository(Category) private category: Repository<Category>,
  ) {
    super();
  }

  getRepository(): Repository<Category> {
    return this.category;
  }
}

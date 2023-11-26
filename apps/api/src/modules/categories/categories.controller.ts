import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/base/base.controller';
import { CategoriesService } from './categories.service';
import { BaseService } from 'src/core/base/base.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoriesController extends BaseController<Category> {
  constructor(private readonly categoriesService: CategoriesService) {
    super();
  }

  getService(): BaseService<Category> {
    return this.categoriesService;
  }
}

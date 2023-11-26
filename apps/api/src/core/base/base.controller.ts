import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { BaseService } from './base.service';

export abstract class BaseController<T> {
  abstract getService(): BaseService<T>;

  @Get()
  async findAll(): Promise<T[]> {
    return await this.getService().findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<T> {
    return await this.getService().findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T) {
    return await this.getService().save(entity);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: number) {
    return this.getService().delete(id);
  }

  @Get('count')
  async count(): Promise<number> {
    return await this.getService().count();
  }
}

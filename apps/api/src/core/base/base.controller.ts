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
import { handleResponse } from '../utils/response.util';

export abstract class BaseController<T> {
  abstract getService(): BaseService<T>;

  @Get()
  async findAll() {
    const query = await this.getService().findAll();

    return handleResponse(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const query = await this.getService().findOne(id);
    return handleResponse(query);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T) {
    const query = await this.getService().save(entity);
    return handleResponse(query);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: number) {
    const query = await this.getService().delete(id);

    return handleResponse(query);
  }

  @Get('count')
  async count() {
    const query = await this.getService().count();
    return handleResponse(query);
  }
}

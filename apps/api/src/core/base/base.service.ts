import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

export abstract class BaseService<T> {
  abstract getRepository(): Repository<T>;

  findAll(): Promise<T[]> {
    return this.getRepository().find();
  }

  async findOne(id: number): Promise<T> {
    const options: FindOneOptions = {
      where: { id },
    };
    return await this.getRepository().findOne(options);
  }

  async save(entity: T): Promise<T> {
    return this.getRepository().save(entity);
  }

  async delete(id: number) {
    await this.getRepository().delete(id);
  }

  count(options?: FindManyOptions<T>): Promise<number> {
    return this.getRepository().count(options);
  }
}

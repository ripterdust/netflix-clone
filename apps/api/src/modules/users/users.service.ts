import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findAll() {
    return this.userRepository.find();
  }

  async create(user: User) {
    const createdUser = this.userRepository.create(user);

    const errors = await validate(createdUser);

    if (errors.length > 0) {
      throw new UnauthorizedException(errors);
    }

    return await this.userRepository.save(createdUser);
  }

  async findByEmail(email: string) {
    const options: FindOneOptions = { where: { email } };

    return this.userRepository.findOne(options);
  }
}

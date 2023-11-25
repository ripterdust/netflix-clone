import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'config';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/user.entity';

const { database } = config;

const databaseSettings: TypeOrmModuleOptions = {
  host: database.host,
  type: database.type,
  username: database.user,
  password: database.password,
  database: database.database,
  synchronize: true,
  entities: [User],
};

@Module({
  imports: [TypeOrmModule.forRoot(databaseSettings), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

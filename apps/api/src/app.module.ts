import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'config';

const { database } = config;

const databaseSettings: TypeOrmModuleOptions = {
  host: database.host,
  type: database.type,
  username: database.user,
  password: database.password,
  database: database.database,
  synchronize: true,
  entities: [],
};
console.log(
  '🚀 ~ file: app.module.ts:18 ~ databaseSettings:',
  databaseSettings,
);

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

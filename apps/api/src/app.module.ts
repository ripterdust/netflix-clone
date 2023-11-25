import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

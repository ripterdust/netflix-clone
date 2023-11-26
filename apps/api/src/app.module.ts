import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'config';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './core/guards/auth.guard';
import { ShowsModule } from './modules/shows/shows.module';
import { Shows } from './modules/shows/shows.entity';
import { ImagesModule } from './modules/images/images.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CategoriesModule } from './modules/categories/categories.module';
import { Category } from './modules/categories/category.entity';

const { database } = config;

const databaseSettings: TypeOrmModuleOptions = {
  host: database.host,
  type: database.type,
  username: database.user,
  password: database.password,
  database: database.database,
  synchronize: true,
  entities: [User, Shows, Category],
};

const rootPath = join(__dirname, '../../', 'uploads');

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseSettings),
    ServeStaticModule.forRoot({ rootPath, serveRoot: 'image' }),
    AuthModule,
    UsersModule,
    ShowsModule,
    ImagesModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}

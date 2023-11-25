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
  imports: [
    TypeOrmModule.forRoot(databaseSettings),
    AuthModule,
    UsersModule,
    ShowsModule,
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

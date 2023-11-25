import { config as configEnv } from 'dotenv';
import { IConfig } from 'src/core/interfaces/config.interface';
import { TTypes } from 'src/core/interfaces/databaseSettings.interface';

configEnv();

const databaseTypes: {
  mysql: 'mysql';
} = {
  mysql: 'mysql',
};
const databaseType: TTypes = databaseTypes[process.env.DB_TYPE] || 'postgres';

export const config: IConfig = {
  jwt: {
    secret: String(process.env.JWT_SECRET),
  },
  database: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    type: databaseType,
  },
};

Object.freeze(config);

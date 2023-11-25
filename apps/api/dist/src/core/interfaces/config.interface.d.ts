import { IDatabaseSettings } from './databaseSettings.interface';
export interface IConfig {
    jwt: {
        secret: string;
    };
    database: IDatabaseSettings;
}

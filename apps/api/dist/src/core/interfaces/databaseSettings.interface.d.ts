export type TTypes = 'mysql' | 'mariadb' | 'postgres';
export interface IDatabaseSettings {
    type: TTypes;
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

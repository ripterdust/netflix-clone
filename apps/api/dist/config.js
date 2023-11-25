"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const databaseTypes = {
    mysql: 'mysql',
};
const databaseType = databaseTypes[process.env.DB_TYPE] || 'postgres';
exports.config = {
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
Object.freeze(exports.config);
//# sourceMappingURL=config.js.map
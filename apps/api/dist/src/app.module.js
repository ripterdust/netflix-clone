"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("../config");
const users_module_1 = require("./modules/users/users.module");
const user_entity_1 = require("./modules/users/user.entity");
const auth_module_1 = require("./modules/auth/auth.module");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./core/guards/auth.guard");
const shows_module_1 = require("./modules/shows/shows.module");
const shows_entity_1 = require("./modules/shows/shows.entity");
const images_module_1 = require("./modules/images/images.module");
const { database } = config_1.config;
const databaseSettings = {
    host: database.host,
    type: database.type,
    username: database.user,
    password: database.password,
    database: database.database,
    synchronize: true,
    entities: [user_entity_1.User, shows_entity_1.Shows],
};
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(databaseSettings),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            shows_module_1.ShowsModule,
            images_module_1.ImagesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
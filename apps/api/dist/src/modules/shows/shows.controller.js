"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowsController = void 0;
const common_1 = require("@nestjs/common");
const response_util_1 = require("../../core/utils/response.util");
const shows_service_1 = require("./shows.service");
const images_service_1 = require("../images/images.service");
let ShowsController = class ShowsController {
    constructor(showsService, imageService) {
        this.showsService = showsService;
        this.imageService = imageService;
    }
    async find() {
        const shows = await this.showsService.getAll();
        return (0, response_util_1.handleResponse)(shows);
    }
    async create(body) {
        const coverImage = String(body.cover);
        this.imageService.moveFileFromTempToBlobs(coverImage);
        const show = {
            name: String(body.name),
            description: String(body.description),
            releaseDate: new Date(body.releaseDate),
            categories: Number(body.categories),
            coverImage,
        };
        const storedShow = await this.showsService.create(show);
        return (0, response_util_1.handleResponse)(storedShow);
    }
    async findById(id) {
        const show = await this.showsService.getById(id);
        if (!show) {
            throw new common_1.NotFoundException(`Element with id ${id} not found`);
        }
        return (0, response_util_1.handleResponse)(show);
    }
};
exports.ShowsController = ShowsController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShowsController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShowsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShowsController.prototype, "findById", null);
exports.ShowsController = ShowsController = __decorate([
    (0, common_1.Controller)('shows'),
    __metadata("design:paramtypes", [shows_service_1.ShowsService,
        images_service_1.ImagesService])
], ShowsController);
//# sourceMappingURL=shows.controller.js.map
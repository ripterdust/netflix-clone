"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const os_util_1 = require("../../core/utils/os.util");
const path_1 = require("path");
const fs_1 = require("fs");
let ImagesService = class ImagesService {
    moveFileFromTempToBlobs(fileName) {
        const tempDir = (0, path_1.join)((0, os_util_1.getTemporalDir)(), fileName);
        const destinationFolder = (0, path_1.join)(__dirname, '../../../../', 'uploads');
        if (!(0, fs_1.existsSync)(destinationFolder)) {
            (0, fs_1.mkdirSync)(destinationFolder);
        }
        const destinationFilePath = (0, path_1.join)(destinationFolder, fileName);
        (0, fs_1.copyFileSync)(tempDir, destinationFilePath);
        (0, fs_1.unlinkSync)(tempDir);
    }
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)()
], ImagesService);
//# sourceMappingURL=images.service.js.map
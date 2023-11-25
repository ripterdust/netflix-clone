"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemporalDir = void 0;
const os_1 = require("os");
const getTemporalDir = () => {
    return (0, os_1.tmpdir)();
};
exports.getTemporalDir = getTemporalDir;
//# sourceMappingURL=os.util.js.map
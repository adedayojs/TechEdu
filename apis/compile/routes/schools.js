"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getSchools_1 = __importDefault(require("./schools-request/getSchools"));
const postSchool_1 = __importDefault(require("./schools-request/postSchool"));
const putSchool_1 = __importDefault(require("./schools-request/putSchool"));
const deleteSchool_1 = __importDefault(require("./schools-request/deleteSchool"));
const router = express_1.default.Router();
router.get('/', getSchools_1.default);
router.post('/', postSchool_1.default);
router.put('/', putSchool_1.default);
router.delete('/', deleteSchool_1.default);
exports.default = router;
//# sourceMappingURL=schools.js.map
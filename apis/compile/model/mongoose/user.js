"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_1 = __importDefault(require("../../schema/mongoose/user"));
const Users = mongoose_1.model('Users', user_1.default);
exports.default = Users;
//# sourceMappingURL=user.js.map
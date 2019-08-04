"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schoolSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        minlength: 20
    },
    email: {
        type: String,
        minlength: 5,
        validate: /a-z@a-z.com/
    }
});
//# sourceMappingURL=school.js.map
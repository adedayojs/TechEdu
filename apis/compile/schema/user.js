"use strict";
const { Schema } = require('mongoose');
const user = new Schema({
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
module.exports = { user };
//# sourceMappingURL=user.js.map
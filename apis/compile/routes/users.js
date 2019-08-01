"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const user_1 = __importDefault(require("../model/user"));
/* GET users listing. */
router.get('/', (req, res) => {
    console.log('Get Request');
    if (Object.keys(req.query).length > 0) {
        console.log('Query Attached');
        const result = user_1.default.find(Object.assign({}, req.query));
        result
            .then((result) => {
            res.json(result);
            return;
        })
            .catch((err) => {
            res.status(404).send(err);
            return;
        });
        return;
    }
    const result = user_1.default.find();
    result
        .then((result) => {
        console.log('Get Successful ');
        res.json(result);
    })
        .catch((err) => {
        console.log('Get failed');
        res.status(500).send(err);
    });
});
router.post('/', (req, res) => {
    console.log('post request');
    console.log(req.body);
    const newUser = new user_1.default(Object.assign({}, req.body));
    const result = newUser.save();
    result
        .then((result) => {
        res
            .status(201)
            .json(result)
            .end();
    })
        .catch((err) => {
        console.log(err.message);
        res.status(400).json(err.message);
        return;
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map
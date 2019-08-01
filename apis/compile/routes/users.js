"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const User = require('../model/user');
/* GET users listing. */
router.get('/', (req, res) => {
    console.log('Get Request');
    if (Object.keys(req.query).length > 0) {
        console.log('Query Attached');
        const result = User.find(Object.assign({}, req.query));
        result
            .then(result => {
            res.json(result);
            return;
        })
            .catch(err => {
            res.status(404).send(err);
            return;
        });
        return;
    }
    const result = User.find();
    result
        .then(result => {
        console.log('Get Successful ');
        res.json(result);
    })
        .catch(err => {
        console.log('Get failed');
        res.status(500).send(err);
    });
});
router.post('/', (req, res) => {
    console.log('post request');
    console.log(req.body);
    const newUser = new User(Object.assign({}, req.body));
    const result = newUser.save();
    result
        .then(result => {
        res
            .status(201)
            .json(result)
            .end();
    })
        .catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
        return;
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map
import express from 'express';
import { MongooseDocument } from 'mongoose';
var router = express.Router();
import User from '../model/mongoose/user';

/* GET users listing. */
router.get('/', (req, res) => {
  console.log('Get Request');
  if (Object.keys(req.query).length > 0) {
    console.log('Query Attached');
    const result = User.find({ ...req.query });
    result
      .then((result: any) => {
        res.json(result);
        return;
      })
      .catch((err: any) => {
        res.status(404).send(err);
        return;
      });

    return;
  }
  const result = User.find();
  result
    .then((result: MongooseDocument[]) => {
      console.log('Get Successful ');
      res.json(result);
    })
    .catch((err: any) => {
      console.log('Get failed');
      res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
  console.log('post request');
  console.log(req.body);
  const newUser = new User({
    ...req.body
  });

  const result = newUser.save();
  result
    .then((result: MongooseDocument) => {
      res
        .status(201)
        .json(result)
        .end();
    })
    .catch((err: any) => {
      console.log(err.message);
      res.status(400).json(err.message);
      return;
    });
});

export default router;

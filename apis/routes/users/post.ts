import express from 'express';
const router = express.Router();
import User from '../../model/user';
import { MongooseDocument } from 'mongoose';

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

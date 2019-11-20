import express from 'express';
const router = express.Router();
import User from '../../model/user';
import { MongooseDocument } from 'mongoose';

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

export default router;

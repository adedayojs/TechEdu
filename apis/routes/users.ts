import express from 'express';

const router = express.Router();
import User from '../model/user';

import getUsers from './users/get';
import postUsers from './users/post';

router.get('/', getUsers);
router.post('/', postUsers);

export default router;

import express from 'express';
import getSchool from './schools/get';
import postSchool from './schools/post';
import putSchool from './schools/update';
import deleteSchool from './schools/delete';

const router = express.Router();

router.get('/', getSchool);
router.post('/', postSchool);
router.put('/', putSchool);
router.delete('/', deleteSchool);

export default router;

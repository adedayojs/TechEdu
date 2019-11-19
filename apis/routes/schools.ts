import express from 'express';
import getSchool from './schools/getSchools';
import postSchool from './schools/postSchool';
import putSchool from './schools/putSchool';
import deleteSchool from './schools/deleteSchool';

const router = express.Router();

router.get('/', getSchool);
router.post('/', postSchool);
router.put('/', putSchool);
router.delete('/', deleteSchool);

export default router;

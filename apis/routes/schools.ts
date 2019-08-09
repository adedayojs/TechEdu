import express from 'express';
import getSchool from './schools-request/getSchools';
import postSchool from './schools-request/postSchool';
import putSchool from './schools-request/putSchool';
import deleteSchool from './schools-request/deleteSchool';

const router = express.Router();

router.get('/', getSchool);
router.post('/', postSchool);
router.put('/', putSchool);
router.delete('/', deleteSchool);

export default router;

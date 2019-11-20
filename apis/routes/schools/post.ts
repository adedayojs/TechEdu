import express from 'express';
import School from '../../model/school';
import Faculty from '../../model/faculty';
import { IFaculty } from '../../model/faculty';

const router = express.Router();

router.post('/', async function(req: express.Request, res: express.Response) {
  let school:any = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    faculties: []
  };

  if (req.body.faculties) {
    console.log(true);
    const faculty = req.body.faculties.map((faculty: IFaculty) => {
      return new Faculty(faculty);
    });
    console.log(faculty);
    school.faculties = faculty;
  }
  console.log(school)
  school = new School(school)
  console.log(school);
  try {
    school = await school.save();
    res.status(201).json(school);
  } catch (ex) {
    res.status(400).send(ex.message);
    console.log(ex.message);
  }
});

export default router;

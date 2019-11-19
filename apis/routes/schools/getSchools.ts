import express from 'express';

const router = express.Router();

const school = [
  {
    id: 1,
    name: 'Unilag',
    description:
      ' Founded in 1962, the University of Lagos has, for over 5 decades, provided qualitative and research-oriented education to Nigerians and all those who have entered its domain in search of knowledge. The University has built a legacy of excellence and has been instrumental in the production of top range graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in Nigeria.',
    icon: './assets/img/unilag.webp',
    url: 'someurl'
  },
  {
    id: 2,
    name: 'Petroleum Training Institute',
    description:
      'The Petroleum Training Institute is a specialized Institution with a mandate to train indigenous manpower to meet the technical and administrative demands. of the oil and gas and other allied industries in Nigeria and Africa. Organizations and Individuals have the opportunity to choose from a training bouquet of.',
    icon: './assets/img/main-campus.png',
    url: 'someurl'
  },
  {
    id: 3,
    name: 'Decagon Institute',
    description:
      'Decagon is a software engineering institute ushering in a new phase of tech-powered growth and prosperity in Nigeria by training and deploying an army of leader-developers. With a project-based curriculum, agile delivery methodology, mentor matching, and leadership modules, we transform any fast learner into a world-class software developer in just six months..',
    icon: '../assets/img/decadev.jpg',
    url: 'someurl'
  },
  {
    id: 4
  },
  {
    name: 'adedayo',
    id: 5
  },
  {
    name: 'adedayo',
    id: 6
  },
  {
    name: 'adedayo',
    id: 7
  }
];

router.get('/', function(req: express.Request, res: express.Response) {
  res.json(school);
});

export default router;

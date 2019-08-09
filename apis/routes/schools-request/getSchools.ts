import express from 'express';

const router = express.Router();

router.get('/', function(req: express.Request, res: express.Response) {
  res.end();
});

export default router;

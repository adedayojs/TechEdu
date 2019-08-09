const app = require('../app');
import request from 'supertest';
import mongoose from 'mongoose';

const db = mongoose.connection;

afterAll(async () => {
  await mongoose.connection.close();
});

describe('apis/school', () => {
  describe('All form of GET Request', () => {
    test('it should return status code 200', async () => {
      const res = await request(app).get('/apis/schools');
      console.log(res.body);
      expect(res.status).toBe(200);
    });
    test('it should be empty by default', async () => {
      const res = await request(app).get('/apis/schools');
      expect(res.body).toEqual({});
    });
  });

  describe('All form of POST Request', () => {
    afterAll(async function() {
      const after = await db.dropDatabase();
    });
    test('Sending without a body should give bad request (400)', async () => {
      const res = await request(app).post('/apis/schools');
      expect(res.status).toBe(400);
    });
    test('Sending with an invalid body should give bad request (400)', async () => {
      const res = await request(app)
        .post('/apis/schools')
        .send('All Is Well');
      expect(res.status).toBe(400);
    });
    test('Sending with an valid body should give resource created (201)', async () => {
      const res = await request(app)
        .post('/apis/schools')
        .send({
          name: 'Petroleum Training Institute',
          address: 'Pti Junction, Warr, Delta State',
          email: 'admin@pti.edu.ng',
          faculties: [
            { title: 'Arts' },
            { title: 'Engineering' },
            { title: 'Lingyustic' }
          ]
        });
      expect(res.status).toBe(201);
    });
  });
});

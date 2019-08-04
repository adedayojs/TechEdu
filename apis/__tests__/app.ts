const app = require('../app');
import request from 'supertest';
import mongoose from 'mongoose';

afterAll(async () => {
  await mongoose.connection.close();
});
describe('apis/school', () => {
  describe('All form of GET Request', () => {
    test('it should return status code 200', async () => {
      const res = await request(app).get('/apis/schools');
      console.log(res.body)
      expect(res.status).toBe(200);
    });
    test('it should not be empty', async () => {
      const res = await request(app).get('/apis/schools');
      expect(res.body).not.toEqual({});
    });
  });

  describe('All form of POST Request', () => {
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
  });
});

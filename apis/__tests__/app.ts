const app = require('../app');
import request from 'supertest';
import mongoose from 'mongoose';

afterAll(async () => {
  await mongoose.connection.close();
});
describe('apis/school', () => {
  describe('All Get Request', () => {
    test('it should return status code 200', async () => {
      const result = await request(app).get('/apis/schools');
      expect(result.status).toBe(200);
    });
    test('it should be defined', async () => {
      const result = await request(app).get('/apis/schools');
      expect(result).toBeDefined();
    });
  });

  describe('All Post Request', () => {});
});

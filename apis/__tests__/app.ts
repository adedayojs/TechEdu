const app = require('../app');
import request from 'supertest';
import mongoose from 'mongoose';

const db = mongoose.Connection;

afterEach(() => {
});
test('It should return all is well', async () => {
  const result = await request(app).get('/apis/schools');
  expect(result.status).toBe(200);
});

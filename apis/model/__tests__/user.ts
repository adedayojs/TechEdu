import mongoose from 'mongoose';
import User from '../user';

const createdUser = {
  _id: new mongoose.Types.ObjectId().toHexString(),
  firstName: 'Cynthia',
  lastname: 'Ilokwe',
  email: 'cyndi3@yahoo.com',
  role: 'FACILITATOR',
  phone: '08066066635',
  username: 'samfeolu',
  password: 'test',
  gender: 'female',
  isAdmin: true,
  isLecturer: false,
  isStudent: false
};

describe('User model test', () => {
  test('User has a module', () => {
    expect(User).toBeDefined();
  });

  describe('Get User Object from Model', () => {
    it('should get a user', () => {
      const user = new User(createdUser);
      expect(user.email).toBe(createdUser.email);
      expect(user.phone).toBe(createdUser.phone);
      expect(user.gender).toBe(createdUser.gender);
    });
  });
});

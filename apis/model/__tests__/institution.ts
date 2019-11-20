import mongoose from 'mongoose';
import Institution from '../institution';

const createdInstitution = {
  _id: new mongoose.Types.ObjectId().toHexString(),
  name: 'University Of Lagos',
  lastname: 'Ilokwe',
  email: 'info@unilag.edu,ng',
  founded: new Date('03 12 1997'),
  website:'www.unilag.edu.ng'

};

describe('Institution model test', () => {
  test('Institution has a module', () => {
    expect(Institution).toBeDefined();
  });

  describe('Get Institution Object from Model', () => {
    it('should get a Institution', () => {
      const institution = new Institution(createdInstitution);
      expect(institution.email).toBe(createdInstitution.email);
      expect(institution.founded).toBe(createdInstitution.founded);
      expect(institution.website).toBe(createdInstitution.website);
    });
  });
});

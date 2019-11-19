import { Schema } from 'mongoose';
import facultySchema from './faculty';

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 10,
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    minlength: 20
  },
  email: {
    type: String,
    minlength: 5,
    validate: /([a-z]|\d){3,}@(?=.[a-z0-9]).{3,}\.[a-z]{2,}/i
  },
  faculties: {
    type: [facultySchema]
  }
});

export default schoolSchema
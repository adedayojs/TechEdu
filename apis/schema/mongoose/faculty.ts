import { Schema } from 'mongoose';

const facultySchema = new Schema({
  title: {
    type: String,
    minlength: 3,
    required: true
  }
});

export default facultySchema;

import { Schema } from 'mongoose';

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
  email:{
      type:String,
      minlength:5,
      validate:/a-z@a-z.com/
  }
});

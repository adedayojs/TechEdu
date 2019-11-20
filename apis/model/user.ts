import { model, Schema, Document } from 'mongoose';
import { IInstitution } from './institution';

interface IUser extends Document {
  username: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  gender: string;
  isAdmin: boolean;
  isLecturer: boolean;
  isStudent: boolean;
  institutions: IInstitution[];
}
const userSchema = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: false },
  email: {
    type: String,
    required: true,
    minlength: 5,
    validate: /([a-z]|\d){3,}@(?=.[a-z0-9]).{3,}\.[a-z]{2,}/i
  },
  password: { type: String, required: true },
  gender: String,
  isAdmin: { required: true, default: false, type: Boolean },
  isLecturer: { required: true, default: false, type: Boolean },
  isStudent: { required: true, default: false, type: Boolean },
  institutions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Institution'
    }
  ]
});

export default model<IUser>('User', userSchema);

import { model, Document, Schema } from 'mongoose';
import { IFaculty } from './faculty';

export interface IInstitution extends Document {
  name: string;
  address: string;
  email: string;
  lga: string;
  state: string;
  type: string[];
  founded: Date;
  principal: string;
  description: string;
  faculties: IFaculty[];
}

const institutionSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 10,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    validate: /([a-z]|\d){3,}@(?=.[a-z0-9]).{3,}\.[a-z]{2,}/i
  },
  address: { type: String, required: true, minlength: 10 },
  website: { type: String, unique: true },
  lga: { type: String },
  state: { type: String, required: true },
  description: String,
  type: {
    type: String,
    enum: {
      values: [
        'UNIVERSITY',
        'POLYTECHNIC',
        'MONOTECHNIC',
        'COLLEGE OF EDUCATION',
        'INSTITUTE',
        'OTHERS'
      ],
      message:
        "Type of Institution should be one of the following 'UNIVERSITY' 'POLYTECHNIC' 'MONOTECHNIC' 'COLLEGE OF EDUCATION' 'INSTITUTE' or 'OTHERS'"
    },
    required: [
      true,
      'Type of Institution is required consult documentation for more details'
    ]
  },
  founded: { type: Date },
  principal: { type: String },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Faculty'
    }
  ],
  fees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Fee'
    }
  ]
});

export default model<IInstitution>('Institution', institutionSchema);

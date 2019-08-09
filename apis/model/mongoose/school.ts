import mongoose, { model, Model, Document } from 'mongoose';
import schoolSchema from '../../schema/mongoose/school';
import {IFaculty} from './faculty'


interface ISchool {
  name: string;
  address: string;
  email: string;
}

interface ISchoolModel extends ISchool, Document {
    faculties:IFaculty[]
}
const School: Model<ISchoolModel> = model<ISchoolModel>('school', schoolSchema);

export default School;

import { model,Schema } from 'mongoose';
import { Document} from 'mongoose'


export interface IFaculty extends Document {
    title: string;
    description: string;
  }

  const facultySchema = new Schema({
    title:String,
    description:String
  });
 
  


export default model<IFaculty>('Faculty', facultySchema);

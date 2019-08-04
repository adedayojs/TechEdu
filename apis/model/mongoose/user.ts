import { model } from 'mongoose';
import user  from '../../schema/mongoose/user';

const Users = model('Users', user);

export default Users;

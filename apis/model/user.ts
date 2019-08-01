import { model } from 'mongoose';
import user  from '../schema/user';

const Users = model('Users', user);

export default Users;

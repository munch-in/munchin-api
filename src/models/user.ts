import mongoose, {Schema} from 'mongoose';
import {IUser} from '../interfaces/IUser';

const UserSchema: Schema = new mongoose.Schema({
  email: String,
  password: {type: String, select: false},
});

export default mongoose.model<IUser>('User', UserSchema);

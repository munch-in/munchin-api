import 'reflect-metadata';
import bcrypt from 'bcrypt';
import {Service} from 'typedi';
import {IUser} from '../interfaces/IUser';
import User from '../models/user';

const SALT_ROUNDS = process.env.SALT_ROUNDS || 1;

@Service()
export default class AuthService {
  public async Register(email: string, password: string): Promise<IUser> {
    try {
      const hash = await bcrypt.hash(password, SALT_ROUNDS);
      return await User.create({email, password: hash});
    } catch (e) {
      throw e;
    }
  }

  public async Login(email: string, password: string): Promise<IUser> {
    const user = await User.findOne({email}).select('password');
    if (!user) {
      throw new Error('User not registered');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }
    return user;
  }
}

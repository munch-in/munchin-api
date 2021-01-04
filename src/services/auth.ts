import 'reflect-metadata';
import bcrypt from 'bcrypt';
import {Service, Inject} from 'typedi';
import {IUser} from '../interfaces/IUser';
import {Model} from 'mongoose';

@Service()
export default class AuthService {
  @Inject('logger')
  private logger: any;

  @Inject('userModel')
  private userModel: Model<IUser>;

  public async Register(email: string, password: string): Promise<IUser> {
    const hash = await bcrypt.hash(password, process.env.SALT_ROUNDS);
    return await this.userModel.create({email: email, password: hash});
  }

  // public async Login(email: string, password: string): Promise<IUser> {
  //
  // }
}

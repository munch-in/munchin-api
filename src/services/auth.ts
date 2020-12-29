import "reflect-metadata";
import {Service, Inject} from 'typedi';
import {IUser} from '../interfaces/IUser';
import {Model} from 'mongoose';

@Service()
export default class AuthService {

  @Inject('logger')
  private logger: any;

  @Inject('userModel')
  private userModel: Model<IUser>;

  public async Register(email: string): Promise<IUser> {
    this.logger.log();
    return await this.userModel.create({email: email});
  }

}
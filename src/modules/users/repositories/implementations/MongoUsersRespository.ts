import { Model } from 'mongoose';
import { ObjectId } from 'mongodb'

import { IUser, User } from '@shared/infra/database/mongodb/entities/User';
import { IUsersRepository } from '../IUsersRepository';


class MongoUsersRespository implements IUsersRepository {

    private users: Model<IUser> = User;

    public async find(): Promise<IUser[]> {
      const user = await this.users.find();
      return user;
    }

    public async findById(_id: ObjectId): Promise<IUser | null> {
      const user = this.users.findById(_id);
      return user
    }

    public async findByEmail(email: string): Promise<IUser | null> {
      const user = this.users.findOne({ email });
      return user;
    }

    public async save(user: IUser): Promise<IUser> {
      const newUser = await this.users.create(user)
      return newUser;
    }

    public async update(_id: ObjectId, data: IUser): Promise<IUser | null> {
      const updatedUser = await User.findByIdAndUpdate(_id, {
        username: data.username
      }, { new: true });
      return updatedUser;
    }

    public async delete(_id: ObjectId): Promise<ObjectId> {
      const user = await User.findByIdAndDelete(_id);
      return user?._id;
    }

}

export { MongoUsersRespository };

import { IUser } from '@shared/infra/database/mongodb/entities/User';
import { ObjectId } from 'mongodb';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';

interface IUsersRepository {

  find(): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser | null>;
  findById(_id: ObjectId): Promise<IUser | null>;
  save(user: IUser): Promise<IUser>;
  update(_id: ObjectId, data: UpdateUserDTO): Promise<IUser | null>;
  delete(_id: ObjectId): Promise<ObjectId>;

}

export { IUsersRepository };

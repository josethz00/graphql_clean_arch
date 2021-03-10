import { ApolloError, UserInputError } from 'apollo-server';
import { ObjectId } from 'mongodb';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUser } from '@shared/infra/database/mongodb/entities/User';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';


class UpdateUserService {

  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: UpdateUserDTO, _id: string): Promise<IUser> {
    if (!_id) {
      throw new UserInputError('ID not provided');
    }

    const user = await this.usersRepository.update(new ObjectId(_id), data);

    if(!user) {
      throw new ApolloError('This user does not exists');
    }

    return user;
  }

}

export { UpdateUserService };

import { ApolloError, UserInputError } from 'apollo-server';
import { ObjectId } from 'mongodb';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';


class DeleteUserService {

  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(_id: string): Promise<ObjectId> {
    if (!_id) {
      throw new UserInputError('ID not provided');
    }

    const user_id = await this.usersRepository.delete(new ObjectId(_id));

    if(!user_id) {
      throw new ApolloError('This user does not exists');
    }

    return user_id;
  }

}

export { DeleteUserService };

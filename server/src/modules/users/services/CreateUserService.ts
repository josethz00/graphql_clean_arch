import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUser, User } from '@shared/infra/database/mongodb/entities/User';
import { UserInputError } from 'apollo-server';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

class CreateUserService {

  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: CreateUserDTO): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(data.email);

    if(user) {
      throw new UserInputError('This e-mail address is already in use');
    }

    const newUser = new User(data);

    return await this.usersRepository.save(newUser);
  }

}

export { CreateUserService };

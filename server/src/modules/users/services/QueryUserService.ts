import { ObjectId } from 'mongodb';

import { IUser } from "@shared/infra/database/mongodb/entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";


class QueryUserService {

  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(_id?: ObjectId): Promise<IUser | IUser[] | null> {
    if(_id) {
      const user = await this.usersRepository.findById(_id);
      return user;
    }

    const user = await this.usersRepository.find();
    return user;
  }

}

export { QueryUserService };

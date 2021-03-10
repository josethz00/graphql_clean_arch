import { Request } from "express";
import { ObjectId } from 'mongodb';

import { IUser } from "@shared/infra/database/mongodb/entities/User";
import { QueryUserService } from "@modules/users/services/QueryUserService";


class QueryUserController {

  private queryUserService!: QueryUserService;

  constructor (queryUserService: QueryUserService) {
      this.queryUserService = queryUserService;
  }

  async index (): Promise<IUser[] | IUser | null> {
    const user = await this.queryUserService.execute();

    return user;
  }

  async show (req: Request): Promise<IUser[] | IUser | null> {
    const _id = req.headers._id as string;

    const user = await this.queryUserService.execute(new ObjectId(_id))
    return user;
  }

}

export { QueryUserController };

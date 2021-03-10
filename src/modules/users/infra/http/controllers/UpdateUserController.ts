import { Request } from 'express';

import { UpdateUserDTO } from "@modules/users/dtos/UpdateUserDTO";
import { UpdateUserService } from "@modules/users/services/UpdateUserService";
import { IUser } from "@shared/infra/database/mongodb/entities/User";


class UpdateUserController {

  private updateUserService!: UpdateUserService;

  constructor (updateUserService: UpdateUserService) {
      this.updateUserService = updateUserService;
  }

  async handle (data: UpdateUserDTO, req: Request): Promise<IUser> {

    const _id = req.headers._id as string;

    try {
      const user = await this.updateUserService.execute(data, _id);

      return user;
    }
    catch (err) {
      return err;
    }
  }

}

export { UpdateUserController };

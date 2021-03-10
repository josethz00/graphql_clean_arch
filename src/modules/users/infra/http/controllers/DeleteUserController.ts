import { Request } from 'express';
import { ObjectId } from 'mongodb';

import { DeleteUserService } from "@modules/users/services/DeleteUserService";


class DeleteUserController {

  private deleteUserService!: DeleteUserService;

  constructor (deleteUserService: DeleteUserService) {
      this.deleteUserService = deleteUserService;
  }

  async handle (req: Request): Promise<String> {

    const _id = req.headers._id as string;

    try {
      const user_id = await this.deleteUserService.execute(_id);
      return String(user_id);
    }
    catch (err) {
      return err;
    }
  }

}

export { DeleteUserController };

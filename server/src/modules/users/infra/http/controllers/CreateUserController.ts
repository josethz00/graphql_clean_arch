import { CreateUserDTO } from "@modules/users/dtos/CreateUserDTO";
import { CreateUserService } from "@modules/users/services/CreateUserService";
import { IUser } from "@shared/infra/database/mongodb/entities/User";


class CreateUserController {

  private createUserService!: CreateUserService;

  constructor (createUserService: CreateUserService) {
      this.createUserService = createUserService;
  }

  async handle ({ username, email, password }: CreateUserDTO): Promise<IUser> {
    try {
      const user = await this.createUserService.execute({
        username,
        email,
        password
      });

      return user;
    }
    catch (err) {
      return err;
    }
  }

}

export { CreateUserController };

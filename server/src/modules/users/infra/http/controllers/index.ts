import { MongoUsersRespository } from "@modules/users/repositories/implementations/MongoUsersRespository";
import { CreateUserService } from "@modules/users/services/CreateUserService";
import { UpdateUserService } from "@modules/users/services/UpdateUserService";
import { QueryUserService } from '@modules/users/services/QueryUserService';
import { CreateUserController } from "./CreateUserController";
import { QueryUserController } from "./QueryUserController";
import { UpdateUserController } from "./UpdateUserController";
import { DeleteUserService } from "@modules/users/services/DeleteUserService";
import { DeleteUserController } from "./DeleteUserController";


const usersRepository = new MongoUsersRespository();

const createUserService = new CreateUserService(usersRepository);
const updateUserService = new UpdateUserService(usersRepository);
const queryUserService = new QueryUserService(usersRepository);
const deleteUserService = new DeleteUserService(usersRepository);

const createUserController = new CreateUserController(createUserService);
const updateUserController = new UpdateUserController(updateUserService);
const queryUserController = new QueryUserController(queryUserService);
const deleteUserController = new DeleteUserController(deleteUserService);

export {
  createUserController,
  updateUserController,
  queryUserController,
  deleteUserController
};

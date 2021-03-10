import { Context } from "@shared/infra/providers/IGraphQLSchemaProvider";
import { createUserController, deleteUserController, updateUserController } from "../controllers";
import { UserInput } from "./inputs";


export default {

  Mutation: {
    createUser: (_parent: unknown, { data: { username, email, password } }: UserInput) => createUserController.handle({
      username,
      email,
      password
    }),
    updateUser: (_parent: unknown, { data: { username, email, password } }: UserInput, { req }: Context) => updateUserController.handle({
      username,
      email,
      password
    }, req!),
    deleteUser: (_parent: unknown, _args: unknown, { req }: Context) => deleteUserController.handle(req!)
  }

};

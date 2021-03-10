import { Context } from "@shared/infra/providers/IGraphQLSchemaProvider";
import { queryUserController } from "../controllers";


export default {

  Query: {
    listUsers: () => queryUserController.index(),
    getUser: (_parent: unknown, _args: unknown, { req }: Context) => queryUserController.show(req!)
  }

};

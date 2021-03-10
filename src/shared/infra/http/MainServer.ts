import { ApolloServer } from "apollo-server";
import { createServer } from 'http';
import * as dotenv from 'dotenv';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

import { MongoAdapter } from "../database/mongodb/MongoAdapter";
import { IGraphQLSchema } from '../providers/IGraphQLSchemaProvider';

dotenv.config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

class MainServer {

  private schema: IGraphQLSchema;
  private apolloServer!: ApolloServer;
  private PORT: number;

  constructor(port: number, schema: IGraphQLSchema) {
    this.PORT = port;
    this.schema = schema;
  }

  public connectToDatabases(): void {
    const mongoAdapter = new MongoAdapter(process.env.MONGODB_URL!);
    mongoAdapter.connect();
  }

  public async config(): Promise<void> {
    this.connectToDatabases();
    this.apolloServer = new ApolloServer({
      cors: {
        origin: '*',
        credentials: true
      },
      typeDefs: this.schema.typeDefs,
      resolvers: this.schema.resolvers,
      context: ({ req, res }) => ({ req, res })
    });
  }

  public run(): void {
    this.apolloServer.listen(this.PORT, () => {
      new SubscriptionServer({
        execute,
        subscribe
      }, {
        server: createServer()
      })
      console.log(`Server is running right now at this URL: http://localhost:${this.PORT}`);
    });
  }

}

export { MainServer };

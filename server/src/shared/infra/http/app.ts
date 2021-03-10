import { PubSub } from 'apollo-server';
import { GraphQLSchemaProvider } from '../providers/implementations/GraphQLSchemaProvider';
import { resolvers, typeDefs } from './graphql';
import { MainServer } from './MainServer';


const PORT = Number(process.env.PORT) || 4000;
const pubsub = new PubSub();
const gqlSchema = new GraphQLSchemaProvider(resolvers, typeDefs, { pubsub });

const mainServer = new MainServer(PORT, gqlSchema.createSchema());
mainServer.config().then(() => mainServer.run());

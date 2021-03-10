//export the resolvers and types to the providers
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';


const typesArray = fileLoader(path.join(__dirname, '..', '..', '..', '..', 'modules', '**', 'infra', 'http', 'graphql', 'types.gql'));
const typeDefs = mergeTypes(typesArray);

const resolversArray = fileLoader(path.join(__dirname, '..', '..', '..', '..', 'modules', '**', 'infra', 'http', 'graphql', '*.ts'));
const resolvers = mergeResolvers(resolversArray);


export { typeDefs, resolvers };
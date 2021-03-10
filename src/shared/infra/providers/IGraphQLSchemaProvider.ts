import { PubSub } from "apollo-server";
import { Request, Response } from 'express';

type Resolvers = any;
type TypeDefs = string;
type Context = {
    pubsub?: PubSub,
    req?: Request,
    res?: Response
};

type IGraphQLSchema = {
    resolvers: Resolvers,
    typeDefs: TypeDefs,
    context: Context;
};

interface IGraphQLSchemaProvider {
    createSchema(): IGraphQLSchema;
}

export { IGraphQLSchemaProvider, Resolvers, TypeDefs, Context, IGraphQLSchema };

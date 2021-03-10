import { IGraphQLSchemaProvider, Resolvers, TypeDefs, IGraphQLSchema, Context } from '../IGraphQLSchemaProvider';

class GraphQLSchemaProvider implements IGraphQLSchemaProvider {

    private resolvers: Resolvers;
    private typeDefs: TypeDefs;
    private schemaObj!: IGraphQLSchema;
    private context: Context;

    constructor (resolvers: unknown, typeDefs: string, context: Context) {
        this.resolvers = resolvers;
        this.typeDefs = typeDefs;
        this.context = context;
    }

    public createSchema (): IGraphQLSchema {
        this.schemaObj = {
            resolvers: this.resolvers,
            typeDefs: this.typeDefs,
            context: this.context
        };

        return this.schemaObj;
    }

}

export { GraphQLSchemaProvider };
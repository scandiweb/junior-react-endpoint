import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
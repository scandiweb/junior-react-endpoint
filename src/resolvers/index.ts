import categoryResolver from './category';

const resolvers = {
    Query: {
        category: categoryResolver
    }
};

export default resolvers;
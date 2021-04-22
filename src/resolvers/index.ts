import categoryResolver from './category';
import currencyResolver from './currencies';

const resolvers = {
    Query: {
        category: categoryResolver,
        currencies: currencyResolver
    }
};

export default resolvers;
import categoryResolver from './category';
import categoriesResolver from './categories';
import currencyResolver from './currencies';

const resolvers = {
    Query: {
        categories: categoriesResolver,
        category: categoryResolver,
        currencies: currencyResolver
    }
};

export default resolvers;

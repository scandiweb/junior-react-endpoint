import categoryResolver from './category';
import categoriesResolver from './categories';
import currencyResolver from './currencies';
import productResolver from './product';

const resolvers = {
    Query: {
        categories: categoriesResolver,
        category: categoryResolver,
        currencies: currencyResolver,
        product: productResolver
    }
};

export default resolvers;

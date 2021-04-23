import { products } from '../data';

type Args = {
    input?: {
        title: string
    }
}

const categoryResolver = (_parent: any, args: Args) => {
    const { input: { title } = {} } = args;

    const result = title 
        ? products.filter(
            (product) => product.getCategory() === title
        )
        : products;

    if (!result.length) {
        return null;
    }

    return {
        name: title ? title : 'all',
        products: result 
    };
}

export default categoryResolver;
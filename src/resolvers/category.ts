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

    return { products: result };
}

export default categoryResolver;
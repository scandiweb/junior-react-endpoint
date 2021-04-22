import { products } from '../data';

const categoryResolver = (_parent: any, args: { title: string }) => {
    const { title } = args;

    const result = title 
        ? products.filter(
            (product) => product.getCategory() === title
        )
        : products;

    return { products: result };
}

export default categoryResolver;
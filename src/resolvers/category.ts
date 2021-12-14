import { products } from '../data';
import { Category, CategoryShape } from '../data/type'

type Args = {
    input?: {
        title: string
    }
}

const categoryResolver = (_parent: any, args: Args): CategoryShape => {
    const { input: { title } = {} } = args;

    let result;

    if (!title || title === Category.all) {
        result = products;
    } else {
        result = products.filter(
            (product) => product.getCategory() === title
        );
    }

    if (!result.length) {
        return null;
    }

    return {
        name: title ? (title as Category) : Category.all,
        products: result
    };
}

export default categoryResolver;

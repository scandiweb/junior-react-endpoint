import { products } from "../data";

type Args = {
    id: string
};

const productResolver = (_parent: any, args: Args) => products.find(
    product => product.getId() === args.id
);

export default productResolver;

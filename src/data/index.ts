import Product from "./model/product";
import { Category } from "./type";


const products: Product[] = [
    new Product('Sneakers')
        .setPrice(99.90)
        .setCategory(Category.clothes),

    new Product('Jacket')
        .setPrice(349.99)
        .setCategory(Category.clothes)
];

export { products };
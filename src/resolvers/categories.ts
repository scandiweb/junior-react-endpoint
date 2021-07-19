import { products } from "../data";
import Product from "../data/model/product";
import { Category } from "../data/type";

type CategoryShape = {
    name: Category,
    products: Product[]
};

type CategoryMap = Record<Category, CategoryShape>;

const categoriesResolver = () => {
    const result = products.reduce((categories, product) => {
        const category = product.getCategory();

        if (!categories[category]) {
            categories[category] = {
                name: category,
                products: []
            };
        }

        const {
            [category]: { products }
        } = categories;

        products.push(product);

        return categories;
    }, {} as CategoryMap);

    return Object.values(result);
};

export default categoriesResolver;

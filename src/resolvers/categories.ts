import { products } from "../data";
import { Category, CategoryShape, CategoryMap } from "../data/type";

const categoriesResolver = (): CategoryShape[] => {
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

    return [
        {
            name: Category.all,
            products
        },
        ...Object.values(result),
    ];
};

export default categoriesResolver;

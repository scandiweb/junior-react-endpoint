import { Category } from "../type";
import converter from '../../util/currency-converter';
import Price from "./price";
import AttributeSet from "./attribute-set";

const roundToTwoDecimals = (num: number) => Number((Math.round(num * 100) / 100).toFixed(2));

class Product {
    protected prices: Price[] = [];
    protected category: Category;
    protected description: string;
    protected gallery: string[] = [];
    protected attributes: AttributeSet[] = [];
    protected inStock: boolean = true;
    protected brand: string;
    protected id: string;

    constructor(
        protected name: string
    ) {}

    protected addPrice(price: Price) {
        this.prices.push(price);

        return this;
    }

    getId = () => this.id;

    getCategory = () => this.category;

    setPrice(amountEUR: number) {
        converter.availableCurrencies.forEach((currency) => {
            this.addPrice(new Price(
                currency,
                roundToTwoDecimals(
                    converter.convertFromEUR(amountEUR, currency.label)
                )
            ))
        });

        return this;
    }

    setId(id: string) {
        this.id = id;

        return this;
    }

    setCategory(category: Category) {
        this.category = category;

        return this;
    }

    setDescription(description: string) {
        this.description = description;

        return this;
    }

    setInStock(is: boolean) {
        this.inStock = is;

        return this;
    }

    setBrand(brand: string) {
        this.brand = brand;

        return this;
    }

    addAttributeSet(attributeSet: AttributeSet) {
        this.attributes.push(attributeSet);

        return this;
    }

    addImage(url: string) {
        this.gallery.push(url);

        return this;
    }

    addImages(urls: string[]) {
        this.gallery.push(...urls);

        return this;
    }
}

export default Product;

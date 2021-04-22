import { Category } from "../type";
import converter from '../../util/currency-converter';
import Price from "./price";

const roundToTwoDecimals = (num: number) => Number((Math.round(num * 100) / 100).toFixed(2));

class Product {
    protected prices: Price[] = [];
    protected category: Category;
    protected description: string;
    protected gallery: string[] = [];

    constructor(
        protected name: string
    ) {}

    protected addPrice(price: Price) {
        this.prices.push(price);

        return this;
    }

    getCategory = () => this.category;

    setPrice(amountEUR: number) {
        converter.availableCurrencies.forEach((currencyCode) => {
            this.addPrice(new Price(
                currencyCode, 
                roundToTwoDecimals(converter.convertFromEUR(amountEUR, currencyCode))
            ))
        });

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
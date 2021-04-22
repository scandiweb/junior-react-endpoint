import Product from "./model/product";
import { Category } from "./type";

import { xboxDescription } from './items/descriptions';
import AttributeSet from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet('Size')
    .addItem(new Attribute('40'))
    .addItem(new Attribute('41'))
    .addItem(new Attribute('42'))
    .addItem(new Attribute('43'));

const clothesSizes = new AttributeSet('Size')
    .addItem(new Attribute('Small', 'S'))
    .addItem(new Attribute('Medium', 'M'))
    .addItem(new Attribute('Large', 'L'))
    .addItem(new Attribute('Extra Large', 'XL'));

const colors = new AttributeSet('Color')
    .addItem(new Attribute('Green', '#44FF03'))
    .addItem(new Attribute('Cyan', '#03FFF7'))
    .addItem(new Attribute('Blue', '#030BFF'))
    .addItem(new Attribute('Black', '#000000'))
    .addItem(new Attribute('White', '#FFFFFF'));

const capacity = new AttributeSet('Capacity')
    .addItem(new Attribute('512G'))
    .addItem(new Attribute('1T'))

const products: Product[] = [
    new Product('Nike Air Huarache Le')
        .setPrice(120)
        .setDescription('<p>Great sneakers for everyday use!</p>')
        .addImages([
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'
        ])
        .setCategory(Category.clothes)
        .addAttributeSet(shoeSizes),

    new Product('Canada Goose Jacket')
        .setPrice(430)
        .addImages([
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016111/product-image/2409L_61_e.jpg'
        ])
        .addAttributeSet(clothesSizes)
        .setDescription('<p>Awesome winter jacket</p>')
        .setCategory(Category.clothes),

    new Product('PlayStation 5')
        .setPrice(700)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
        ])
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setDescription('<p>This will always be out of stock. Although, you can try to buy it now!</p>')
        .setCategory(Category.tech),

    new Product('Xbox Series S 512GB')
        .setPrice(277)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
        ])
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setDescription(xboxDescription)
        .setCategory(Category.tech)
];

export { products };
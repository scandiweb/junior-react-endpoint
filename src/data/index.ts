import Product from "./model/product";
import { Category } from "./type";

import { xboxDescription, airpodsDescription, airtagDescription } from './items/descriptions';
import AttributeSet, { AttributeType } from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet('Size')
    .addItemList([
        new Attribute('40'),
        new Attribute('41'),
        new Attribute('42'),
        new Attribute('43')
    ]);


const clothesSizes = new AttributeSet('Size')
    .addItemList([
        new Attribute('Small', 'S'),
        new Attribute('Medium', 'M'),
        new Attribute('Large', 'L'),
        new Attribute('Extra Large', 'XL')
    ]);

const colors = new AttributeSet('Color')
    .setType(AttributeType.swatch)
    .addItemList([
        new Attribute('Green', '#44FF03'),
        new Attribute('Cyan', '#03FFF7'),
        new Attribute('Blue', '#030BFF'),
        new Attribute('Black', '#000000'),
        new Attribute('White', '#FFFFFF')
    ]);

const yesNo = [new Attribute('Yes'), new Attribute('No')];

const capacity = new AttributeSet('Capacity')
    .addItemList([
        new Attribute('512G'),
        new Attribute('1T')
    ]);

const products: Product[] = [
    new Product('Nike Air Huarache Le')
        .setId('huarache-x-stussy-le')
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
        .setBrand('Nike x Stussy')
        .addAttributeSet(shoeSizes),

    new Product('Jacket')
        .setId('jacket-canada-goosee')
        .setPrice(430)
        .addImages([
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png',
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'
        ])
        .addAttributeSet(clothesSizes)
        .setBrand('Canada Goose')
        .setDescription('<p>Awesome winter jacket</p>')
        .setCategory(Category.clothes),

    new Product('PlayStation 5')
        .setId('ps-5')
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
        .setBrand('Sony')
        .setInStock(false)
        .setDescription('<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>')
        .setCategory(Category.tech),

    new Product('Xbox Series S 512GB')
        .setId('xbox-series-s')
        .setPrice(277)
        .addImages([
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
        ])
        .setBrand('Microsoft')
        .setInStock(false)
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setDescription(xboxDescription)
        .setCategory(Category.tech),

    new Product('iMac 2021')
        .setId('apple-imac-2021')
        .setPrice(1400)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000'
        ])
        .addAttributeSet(new AttributeSet('Capacity')
            .addItem(new Attribute('256GB'))
            .addItem(new Attribute('512GB'))
        )
        .setDescription('The new iMac!')
        .addAttributeSet(new AttributeSet('With USB 3 ports').addItemList(yesNo))
        .addAttributeSet(new AttributeSet('Touch ID in keyboard').addItemList(yesNo))
        .setCategory(Category.tech),

    new Product('iPhone 12 Pro')
        .setId('apple-iphone-12-pro')
        .setPrice(830)
        .setBrand('Apple')
        .setDescription('This is iPhone 12. Nothing else to say.')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000'
        ])
        .addAttributeSet(capacity)
        .addAttributeSet(colors)
        .setCategory(Category.tech),

    new Product('AirPods Pro')
        .setId('apple-airpods-pro')
        .setPrice(249)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000'
        ])
        .setInStock(false)
        .setDescription(airpodsDescription)
        .setCategory(Category.tech),

    new Product('AirTag')
        .setId('apple-airtag')
        .setPrice(100)
        .setBrand('Apple')
        .addImages([
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000'
        ])
        .setDescription(airtagDescription)
        .setCategory(Category.tech)
];

export { products };

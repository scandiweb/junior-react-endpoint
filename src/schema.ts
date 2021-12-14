import { gql } from 'apollo-server';

const typeDefs = gql`
    type Price {
        currency: Currency!,
        amount: Float!
    }

    type Attribute {
        displayValue: String,
        value: String,
        id: String!
    }

    type AttributeSet {
        id: String!,
        name: String,
        type: String,
        items: [Attribute]
    }

    type Product {
        id: String!,
        name: String!,
        inStock: Boolean,
        gallery: [String],
        description: String!,
        category: String!,
        attributes: [AttributeSet]
        prices: [Price!]!,
        brand: String!
    }

    type Category {
        name: String,
        products: [Product]!
    }

    type Currency {
        label: String!,
        symbol: String!
    }

    input CategoryInput {
        title: String!
    }

    type Query {
        categories: [Category],
        category(input: CategoryInput): Category,
        product(id: String!): Product,
        currencies: [Currency]
    }
`;

export default typeDefs;

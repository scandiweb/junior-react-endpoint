import { gql } from 'apollo-server';

const typeDefs = gql`
    type Price {
        currency: String!,
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
        items: [Attribute]
    }

    type Product {
        name: String!,
        gallery: [String],
        description: String!,
        category: String!,
        attributes: [AttributeSet]
        prices: [Price!]!,
    }

    type Category {
        products: [Product]!
    }

    input CategoryInput {
        title: String
    }

    type Query {
        category(input: CategoryInput): Category,
        currencies: [String]
    }
`;

export default typeDefs;

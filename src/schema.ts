import { gql } from 'apollo-server';

const typeDefs = gql`
    type Price {
        currency: String!,
        amount: Float!
    }

    type OptionValue {
        id: Int!,
        displayValue: String
    }

    type OptionSet {
        id: Int!,
        name: String,
        values: [OptionValue]
    }

    type Product {
        name: String!,
        gallery: [String],
        description: String!,
        options: OptionSet
        price: [Price!]!,
    }

    type Category {
        products: [Product]!
    }

    type Query {
        category: Category
    }
`;

export default typeDefs;

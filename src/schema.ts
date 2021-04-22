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
        category: String!,
        options: OptionSet
        prices: [Price!]!,
    }

    type Category {
        products: [Product]!
    }

    type Query {
        category(title: String): Category
    }
`;

export default typeDefs;

const { gql } = require('apollo-server');

const typeDefs = gql`
    type Price {
        currency: String!,
        amount: Float!
    }

    type Product {
        name: String,
        price: [Price],
    }

    type Category {
        products: [Product]!
    }

    type Query {
        category: Category
    }
`;

module.exports = typeDefs;

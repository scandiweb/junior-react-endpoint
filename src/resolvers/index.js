const categoryResolver = require('./category');

const resolvers = {
    Query: {
        category: categoryResolver
    }
};

module.exports = resolvers;
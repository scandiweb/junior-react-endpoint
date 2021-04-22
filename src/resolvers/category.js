const products = require('../data');

const categoryResolver = () => {
    return { products };
}

module.exports = categoryResolver;
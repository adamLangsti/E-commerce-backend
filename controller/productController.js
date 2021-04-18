const { products } = require('../products');

const getProducts = (req, res) => {
    res.status(200).send(products);
};

module.exports = { getProducts };

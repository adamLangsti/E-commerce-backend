const { categories } = require('../data');

const getCategories = (req, res) => {
    res.status(200).send(categories);
};

const getProductId = (req,res) => {
    res.status(200).send
}

module.exports = { getCategories };

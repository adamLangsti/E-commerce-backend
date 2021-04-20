const { categories } = require('../components/data');

const getCategories = (req, res) => {
    res.status(200).send(categories);
};

module.exports = { getCategories };

const { subProducts } = require('../components/subProducts');

const getSubProducts = (req, res) => {
    res.status(200).send(subProducts);
};
module.exports = { getSubProducts };

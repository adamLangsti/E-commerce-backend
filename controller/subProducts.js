const { subProducts } = require('../subProducts');

const getSubProducts = (req, res) => {
    res.status(200).send(subProducts);
};
module.exports = { getSubProducts };

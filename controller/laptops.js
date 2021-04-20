const { laptops } = require('../components/data');

const getLaptops = (req, res) => {
    res.status(200).send(laptops);
};
module.exports = { getLaptops };

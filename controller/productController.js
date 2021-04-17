const { products } = require('../products');

const getProducts = (req, res) => {
    // console.log(req.name)
    const newProduct = products.map((product) => product.name)
    res.status(200).json({ success: true, data: newProduct });
};

module.exports = { getProducts };

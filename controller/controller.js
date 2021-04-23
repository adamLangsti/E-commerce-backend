const {
    categories,
    apple,
    home,
    laptops,
    macbook,
} = require('../components/data');

const getCategories = (req, res) => {
    res.status(200).send(categories);
};

const getApple = (req, res) => {
    res.status(200).send(apple);
};

const getHome = (req, res) => {
    res.status(200).send(home);
};

const getLaptops = (req, res) => {
    res.status(200).send(laptops);
};
const getMacbookAir = (req, res) => {
    res.status(200).send(macbook);
};

module.exports = {
    getCategories,
    getApple,
    getHome,
    getLaptops,
    getMacbookAir,
};

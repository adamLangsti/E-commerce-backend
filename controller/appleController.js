const { apple } = require('../components/data');

const getApple = (req, res) => {
    if (res.status === 400) {
        res.status(400).send("Page doesn't exist.");
    }
    res.status(200).send(apple);
};

module.exports = { getApple };

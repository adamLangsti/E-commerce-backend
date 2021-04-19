const { home } = require('../components/homeData');

const getHome = (req, res) => {
    res.status(200).send(home);
};

module.exports = { getHome };

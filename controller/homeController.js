const { home } = require('../components/data');

const getHome = (req, res) => {
    res.status(200).send(home);
};

module.exports = { getHome };

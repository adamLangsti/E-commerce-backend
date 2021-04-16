const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (res.status === 400) {
        res.send('Page not found');
    }
    res.status(200).send('This is a test API');
});

module.exports = router;

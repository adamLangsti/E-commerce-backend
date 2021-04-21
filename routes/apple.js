const express = require('express');
const router = express.Router();

const { getApple } = require('../controller/appleController');

router.route('/').get(getApple);

module.exports = router;

const express = require('express');
const router = express.Router();

const { getApple } = require('../controller/controller');

router.route('/').get(getApple);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getSubProducts } = require('../controller/subProducts');

router.route('/').get(getSubProducts);

module.exports = router;

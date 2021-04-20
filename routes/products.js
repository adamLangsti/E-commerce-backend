const express = require('express');
const router = express.Router();
let { getCategories } = require('../controller/categories');

router.route('/').get(getCategories);

module.exports = router;

const express = require('express');
const router = express.Router();
let { getCategories } = require('../controller/controller');

router.route('/').get(getCategories);

module.exports = router;

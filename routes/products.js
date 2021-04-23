const express = require('express');
const router = express.Router();
let { getCategories } = require('../controller/controller');

router.route('/').get(getCategories);
// router.route('/').get(getApple);

module.exports = router;

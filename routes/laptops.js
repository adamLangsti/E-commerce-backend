const express = require('express');
const router = express.Router();
const { getLaptops } = require('../controller/controller');

router.route('/').get(getLaptops);

module.exports = router;

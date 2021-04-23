const express = require('express');
const router = express.Router();
const { getMacbookAir } = require('../controller/controller');

router.route('/').get(getMacbookAir);

module.exports = router;

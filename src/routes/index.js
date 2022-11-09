const express = require('express');
const router = express.Router();
const controller = require('../controllers/TempHumidity.controller');

router.get('/', controller.getData);
router.post('/', controller.createData);

module.exports = router;
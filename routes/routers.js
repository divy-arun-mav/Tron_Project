const express = require('express');
const router = express.Router();
const service = require('../controllers/service');

router.get('/',service.home);

module.exports = router;


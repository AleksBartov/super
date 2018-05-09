const express = require('express'), router = express.Router(),
authController = require('../controllers/authController');

router.post('/', authController);

module.exports = router;

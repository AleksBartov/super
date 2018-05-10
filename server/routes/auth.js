const express = require('express'), router = express.Router(),
authController = require('../controllers/authController'),
authControllerPolice = require('../police/authControllerPolice');

router.post('/', authControllerPolice, authController);

module.exports = router;

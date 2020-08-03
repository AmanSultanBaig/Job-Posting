const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController')

router.get('/', authController.getData)

module.exports = router;
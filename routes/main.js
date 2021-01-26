const express = require('express');
const wishesController = require('../controllers/wishesController');
const router = express.Router();

router.get('/', wishesController.getWishPage);

module.exports = router;
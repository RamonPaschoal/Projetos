const express = require('express');
const createSale = require('./createSale');


const router = express.Router({ mergeParams: true });

router.put('/', createSale);

module.exports = router;

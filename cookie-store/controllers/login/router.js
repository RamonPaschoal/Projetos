const express = require('express');
const login = require('./login');
const loginList = require('./loginList');

const router = express.Router({ mergeParams: true });

router.post('/', login);
router.get('/', loginList);

module.exports = router;

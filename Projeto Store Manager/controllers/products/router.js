const express = require('express');
const create = require('./create');
const find = require('./list');
const findById = require('./get');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', find);
router.get('/:id', findById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

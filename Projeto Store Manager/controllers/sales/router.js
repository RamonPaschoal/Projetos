const express = require('express');
const create = require('./create');
const list = require('./list');
const findById = require('./findById');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);
router.get('/:id', findById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

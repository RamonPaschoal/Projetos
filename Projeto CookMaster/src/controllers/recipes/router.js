const express = require('express');

const upload = require('../../middleware/upload');

const recipes = require('./recipes');
const recipesList = require('./recipeList');
const recipeById = require('./recipeById');
const update = require('./update');
const remove = require('./remove');
const uploadImage = require('./uploadImage');

const router = express.Router({ mergeParams: true });

router.post('/', recipes);
router.get('/', recipesList);
router.get('/:id', recipeById);
router.put('/:id', update);
router.delete('/:id', remove);
router.put('/:id/image', upload.single('image'), uploadImage);

module.exports = router;
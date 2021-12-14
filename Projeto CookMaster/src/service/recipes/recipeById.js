const recipeById = require('../../models/recipes/recipeById');

const ErrorWrongIdFormat = {
  err: { message: 'recipe not found' },
};

module.exports = async (id) => {
  const findById = await recipeById(id);

  if (!findById) {
    return ErrorWrongIdFormat;
  }

  // console.log(findById);

  return { findById };
};
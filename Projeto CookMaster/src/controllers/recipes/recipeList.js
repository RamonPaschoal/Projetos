const modelRecipeList = require('../../models/recipes/recipeList');

module.exports = async (req, res, next) => {
  try {
    const list = await modelRecipeList();

    return res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

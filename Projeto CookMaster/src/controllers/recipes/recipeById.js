const serviceRecipeById = require('../../service/recipes/recipeById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { err, findById } = await serviceRecipeById(id);

    if (err) {
      res.status(404).json(err);
    }

    console.log(findById);

    return res.status(200).json(findById);
  } catch (err) {
    next(err);
  }
};
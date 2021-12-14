const serviceRecipe = require('../../service/recipes/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const token = req.headers.authorization;

    const { err, errToken, insertRecipe } = await serviceRecipe(
      { name, ingredients, preparation }, token,
      );

    if (err) {
      return res.status(400).json(err);
    }

    if (errToken) {
      return res.status(401).json(errToken);
    }

    return res.status(201).json({ recipe: insertRecipe });
  } catch (err) {
    next(err);
  }
};

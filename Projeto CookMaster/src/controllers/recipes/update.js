const serviceUpdate = require('../../service/recipes/update');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { id } = req.params;
    const token = req.headers.authorization;
    const response = await serviceUpdate({ id, name, ingredients, preparation }, token);

    if ('message' in response) {
      return res.status(401).json({ message: response.message });
    }

    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
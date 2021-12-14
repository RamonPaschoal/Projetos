const serviceRemove = require('../../service/recipes/remove');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const token = req.headers.authorization;

    const response = await serviceRemove(id, token);
    
    if (response) {
      return res.status(401).json(response);
    }

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};
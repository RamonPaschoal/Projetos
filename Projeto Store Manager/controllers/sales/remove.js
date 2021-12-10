const removeService = require('../../services/sales/remove');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { err } = await removeService(id);
    
    if (err) {
      return res.status(422).json({ err });
    }

    return res.status(200).end();
  } catch (err) {
    next(err);
  }
};
const findById = require('../../services/sales/findById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { err, sale } = await findById(id); 

    if (err) {
      res.status(404).json({ err });
    }

    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};
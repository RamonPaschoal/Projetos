const updateService = require('../../services/sales/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itensSold = req.body;
    const { err, sales } = await updateService(id, itensSold);

    if (err) {
      return res.status(422).json({ err });
    }

    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};
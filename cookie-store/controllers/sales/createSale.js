const createSale = require('../../models/sales/createSale');
const list = require('../../models/products/list')

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body

    await createSale(name, quantity);

    const updatedList = await list()

    return res.status(200).json(updatedList);
  } catch (err) {
    next(err)
  }
}
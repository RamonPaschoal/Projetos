const { validToken } = require('../middleware/token');
const createSaleModel = require('../models/sales/createSale');

module.exports = async (name, quantity, token) => {
  const dataToken = await validToken(token);

  if('message' in dataToken) return dataToken;

  if (typeof name !== 'string') return { code: 406, message: 'Name must be a string' }

  if (typeof quantity !== 'number') return { code: 406, message: 'Quantity must be a number' }

  const update = await createSaleModel(name, quantity);

  return update
}
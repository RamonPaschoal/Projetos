const { validToken } = require('../middleware/token');
const updateModel = require('../models/products/update');

module.exports = async (id, name, quantity, token) => {
  const dataToken = await validToken(token);

  if('message' in dataToken) return dataToken;

  if (typeof name !== 'string') return { code: 406, message: 'Name must be a string' }

  if (typeof quantity !== 'number') return { code: 406, message: 'Quantity must be a number' }

  const update = await updateModel(id, name, quantity, token);

  return update
}
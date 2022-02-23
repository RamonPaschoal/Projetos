const { validToken } = require('../middleware/token');
const listModel = require('../models/products/list')

module.exports = async (token) => {
  const dataToken = await validToken(token);

  if('message' in dataToken) return dataToken;

  const findProducts = await listModel();

  return findProducts
}
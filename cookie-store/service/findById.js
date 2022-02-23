const { validToken } = require('../middleware/token');
const findByIdModel = require('../models/products/findById');

module.exports = async (id, token) => {
  const dataToken = await validToken(token);

  if('message' in dataToken) return dataToken;

  const findById = await findByIdModel(id);

  if (!findById) return { code: 404, message: 'Id does not exists' }

  return findById
}
const { validToken } = require('../middleware/token');
const loginListModel = require('../models/login/loginList')

module.exports = async (token) => {
  const dataToken = await validToken(token);

  if('message' in dataToken) return dataToken;

  const findProducts = await loginListModel();

  return findProducts
}
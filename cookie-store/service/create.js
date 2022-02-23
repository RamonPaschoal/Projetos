const { validToken } = require('../middleware/token');
const createModel = require('../models/products/create');
const listModel = require('../models/products/list');

module.exports = async (name, quantity, token) => {
  const dataToken = await validToken(token);

  if('message' in dataToken) return dataToken;

  if (typeof name !== 'string') return { code: 406, message: 'Name must be a string' }

  if (typeof quantity !== 'number') return { code: 406, message: 'Quantity must be a number' }
  
  const lists = await listModel();

  const productAlreadyExist = lists.map(list => list.name).includes(name)

  if (productAlreadyExist) return { code: 406, message: 'Product already exists' }

  const create = await createModel(name, quantity);

  return create
}
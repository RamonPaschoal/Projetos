const jwt = require('jsonwebtoken');
const modelRemove = require('../../models/recipes/remove');
const modelRecipeById = require('../../models/recipes/recipeById');

const secret = 'senha123';

const objErrors = {
  objInvalidEntries: { 
    err: { message: 'missing auth token' },
  },
};

const validEntries = async (token) => {
  let verifyToken;
  if (!token) return objErrors.objInvalidEntries;
  
  try {
    verifyToken = jwt.verify(token, secret);
  } catch (err) {
    return objErrors.objInvalidEntries;
  }

  const dataToken = verifyToken.data;

  return dataToken;
};

module.exports = async (id, token) => {
  const dataToken = await validEntries(token);

  console.log(dataToken);

  if ('err' in dataToken) return dataToken.err;

  const { _id, role } = dataToken;

  const { userId } = await modelRecipeById(id);

  // const userIdToString = userId.toString();

  if (_id !== userId || role !== 'admin') {
    return objErrors.objInvalid;
  }

  const remove = await modelRemove(id);

  return remove;
};
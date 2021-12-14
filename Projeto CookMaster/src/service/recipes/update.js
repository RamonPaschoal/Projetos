const jwt = require('jsonwebtoken');

const modelUpdate = require('../../models/recipes/update');
const modelRecipeById = require('../../models/recipes/recipeById');

const secret = 'senha123';

const objErrors = {
  objInvalidEntries: { 
    code: 401, message: 'missing auth token',
  },
  objInvalidToken: {
    code: 401, message: 'jwt malformed',
  },
  objInvalid: {
    code: 404, message: 'usuário não é dono da receita nem admin',
  },
};

const validEntries = async (token) => {
  let verifyToken;
  if (!token) return objErrors.objInvalidEntries;
  
  try {
    verifyToken = jwt.verify(token, secret);
  } catch (err) {
    return objErrors.objInvalidToken;
  }

  const dataToken = verifyToken.data;

  return dataToken;
};

module.exports = async ({ id, name, ingredients, preparation }, token) => {
  const dataToken = await validEntries(token);

  if ('message' in dataToken) return dataToken;

  const { _id, role } = dataToken;

  const { userId } = await modelRecipeById(id);

  const userIdToString = userId.toString();

  if (_id !== userIdToString && role !== 'admin') return objErrors.objInvalid;

  const update = await modelUpdate({ id, name, ingredients, preparation });

  return {
    ...update,
    userId,
  };
};
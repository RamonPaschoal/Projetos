const jwt = require('jsonwebtoken');
const modelRecipes = require('../../models/recipes/recipes');
const modelLogin = require('../../models/login/login');

const objErrors = {
  objInvalidEntries: { 
    err: { message: 'Invalid entries. Try again.' },
  },
  objInvalidToken: {
    errToken: { message: 'jwt malformed' },
  },
};

const secret = 'senha123';

module.exports = async ({ name, ingredients, preparation }, token) => {
  let verifyToken;
  try {
    verifyToken = jwt.verify(token, secret);
  } catch (err) {
    return objErrors.objInvalidToken;
  }

  const { email } = verifyToken.data;

  const { _id: userId } = await modelLogin({ email });

  if (!name || !ingredients || !preparation) return objErrors.objInvalidEntries;

  const insertRecipe = await modelRecipes({ name, ingredients, preparation, userId });

  return { insertRecipe };
};
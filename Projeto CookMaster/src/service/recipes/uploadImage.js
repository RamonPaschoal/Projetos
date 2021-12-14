const jwt = require('jsonwebtoken');

const modelRecipeById = require('../../models/recipes/recipeById');
const modelFindByEmail = require('../../models/user/findByName');
const modelUpdateRecipe = require('../../models/recipes/update');

const secret = 'senha123';

const objErrors = {
  objInvalidEntries: {
    code: 401, message: 'missing auth token',
  },
};

const validEntries = (token = '') => {
  let verifyToken;
  
  try {
    verifyToken = jwt.verify(token, secret);
  } catch (err) {
    return objErrors.objInvalidEntries;
  }

  const { data } = verifyToken;

  return data.email;
};

module.exports = async (recipeId, token) => {
  try {
    const email = validEntries(token);
  
    console.log(email);
  
    const { _id: userId } = await modelFindByEmail({ email });

    const recipeById = await modelRecipeById(recipeId);
  
    const newRecipe = {
      ...recipeById,
      image: `localhost:3000/src/uploads/${recipeId}.jpeg`,
    };
  
    if (email === 'root@email.com' || String(userId) === String(recipeById.userId)) {
      await modelUpdateRecipe({ recipeId, ...newRecipe });
    }
  
    return newRecipe;
  } catch (err) {
    return objErrors.objInvalidEntries;
  }
};

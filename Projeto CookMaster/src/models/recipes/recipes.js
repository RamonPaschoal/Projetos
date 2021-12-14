const connection = require('../connection');

module.exports = async ({ name, ingredients, preparation, userId }) => {
  const jonas = (await connection());
  const recipeObj = await jonas.collection('recipes').insertOne(
    { name, ingredients, preparation, userId },
  );
  
  return recipeObj.ops[0];
};
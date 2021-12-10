const connection = require('../connection');

module.exports = async (name) => {
  const jonas = (await connection());
  const findProduct = await jonas.collection('products').findOne({ name }); 

  return findProduct; // retorba o objeto que possua o name de req.body
};
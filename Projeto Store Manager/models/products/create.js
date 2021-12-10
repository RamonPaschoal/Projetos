const connection = require('../connection');

module.exports = async (name, quantity) => {
  const jonas = (await connection());
  const productObj = await jonas.collection('products').insertOne({ name, quantity }); // Insere um objeto com nome e quantidade no banco de dados 'products'.
  
  return {
    _id: productObj.insertedId, // Id inserido automaticamente pelo mongo, definido como _id
    name,
    quantity,
  };
};
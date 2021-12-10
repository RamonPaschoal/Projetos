const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, name, quantity) => {
  const updateProduct = (await connection());
  await updateProduct.collection('products').updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: { name, quantity },
    },
  ); // atualiza o nome e quantidade do objeto através do _id. 

  return { _id: ObjectId(id), name, quantity }; // Retorna o objeto com o _id e os novos dados. 
};
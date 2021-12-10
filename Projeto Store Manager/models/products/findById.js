const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const findProductById = (await connection());

  if (ObjectId.isValid(id)) {
    return findProductById.collection('products').findOne(ObjectId(id));
  } // verifica se o id passado como parâmetro tem formato válido. Se não tiver, retorna null

  return null;
};
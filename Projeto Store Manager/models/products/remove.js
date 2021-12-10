const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const jonas = (await connection());

  if (ObjectId.isValid(id)) {
    return jonas.collection('products').deleteOne(
      {
        _id: ObjectId(id),
      },
    );
  } // verifica se o id do objeto é válido. se o mesmo for válido, deleta-o do banco de dados

  return null; // caso não seja válido, retorne null
};
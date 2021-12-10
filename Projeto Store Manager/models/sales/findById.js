const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const connect = (await connection());

  if (ObjectId.isValid(id)) {
    return connect.collection('sales').findOne(ObjectId(id));
  } // verifica se o id é válido, se for retorna a o objeto correspondente ao parâmetro id. 

  return null;
};
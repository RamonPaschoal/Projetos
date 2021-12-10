const connection = require('../connection');

module.exports = async () => {
  const jonas = (await connection());
  const findList = await jonas.collection('products').find().toArray(); // Retorna todos os objetos cadastrados no banco de dados dentro de um array
  return findList; 
};
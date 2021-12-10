const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, itensSold) => {
  const jonas = (await connection());
  await jonas.collection('sales').updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: { itensSold },
    },
  ); // Busca um objeto com o id informado e o atualiza

  return { _id: ObjectId(id), itensSold };
};
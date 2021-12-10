const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const jonas = (await connection());

  if (ObjectId.isValid(id)) {
    return jonas.collection('sales').deleteOne(
      {
        _id: ObjectId(id),
      },
    );
  } // busca o objeto referente ao id passado como parâmetro e o deleta.

  return null;
};
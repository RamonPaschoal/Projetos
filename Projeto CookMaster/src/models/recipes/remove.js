const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const jonas = (await connection());

  if (ObjectId.isValid(id)) {
    return jonas.collection('recipes').deleteOne(
      {
        _id: ObjectId(id),
      },
    );
  }

  return null;
};
const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async ({ id, name, ingredients, preparation }) => {
  const jonas = (await connection());
  await jonas.collection('recipes').updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: { name, ingredients, preparation },
    },
  );

  return { _id: ObjectId(id), name, ingredients, preparation };
};
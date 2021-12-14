const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const findId = (await connection());

  if (ObjectId.isValid(id)) {
    const findId2 = await findId.collection('recipes').findOne({ _id: ObjectId(id) });
    // console.log(findId2);
    return findId2;
  }

  return null;
};
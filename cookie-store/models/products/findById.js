const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const findProductById = (await connection());

  if (ObjectId.isValid(id)) {
    return findProductById.collection('products').findOne(ObjectId(id));
  }

  return null;
};
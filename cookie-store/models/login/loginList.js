const connection = require('../connection');

module.exports = async () => {
  const list = (await connection());
  const findList = await list.collection('users').find().toArray();

  return findList; 
};
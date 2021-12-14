const connection = require('../connection');

module.exports = async () => {
  const jonas = (await connection());
  const list = await jonas.collection('recipes').find().toArray();
  
  return list;
};
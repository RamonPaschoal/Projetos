const connection = require('../connection');

module.exports = async ({ email }) => {
  const jonas = (await connection());
  const loginObj = await jonas.collection('users').findOne({ email });

  // console.log('model', loginObj);

  return loginObj;
};
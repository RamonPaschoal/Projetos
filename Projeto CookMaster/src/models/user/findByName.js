const connection = require('../connection');

module.exports = async ({ email }) => {
  const jonas = (await connection());
  const findEmail = await jonas.collection('users').findOne({ email });

  return findEmail;
};
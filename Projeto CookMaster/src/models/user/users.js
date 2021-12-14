const connection = require('../connection');

module.exports = async ({ name, email, password, role }) => {
  const jonas = (await connection());
  const userObj = await jonas.collection('users').insertOne({ name, email, password, role });
  
  return {
    name,
    email,
    role,
    _id: userObj.insertedId,
  };
};
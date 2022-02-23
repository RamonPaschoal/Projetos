const connection = require('../connection');

module.exports = async (user, password) => {
  const connect = (await connection());
  const userObj = await connect.collection('users').insertOne({ user, password });
  
  return {
    _id: userObj.insertedId,
    user,
    password,
  };
};
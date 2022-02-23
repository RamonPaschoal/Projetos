const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, name, quantity, _token) => {
  const connect = (await connection())
    await connect.collection('products').updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $set: { name, quantity }
      }
    )

    return { name, quantity }
}
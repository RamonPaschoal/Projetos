const loginModel = require('../models/login/login');
const loginListModel = require('../models/login/loginList')

module.exports = async (user, password) => {
  if (user.length < 6) return { code: 406, message: 'User must be at least 6 characters long' };

  if (typeof password !== 'string') return { code: 406, message: 'Password must be a string' };

  const lists = await loginListModel();

  const loginAlreadyExist = lists.map(list => list.user).includes(user);

  if (loginAlreadyExist) return { code: 406, message: 'User already exists' };

  const login = await loginModel(user, password);

  return login;
}
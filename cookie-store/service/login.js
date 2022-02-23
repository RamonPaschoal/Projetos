const loginModel = require('../models/login/login');
const loginListModel = require('../models/login/loginList')

module.exports = async (user, password) => {
  if (user.length < 6) return { code: 406, message: 'User must be at least 6 characters long' };

  if (password.length < 8) return { code: 406, message: 'Password must be at least 8 characters long' };

  const lists = await loginListModel();

  const loginAlreadyExist = lists.map(list => list.user).includes(user);

  if (loginAlreadyExist) return { code: 406, message: 'User already exists' };

  const login = await loginModel(user, password);

  return login;
}
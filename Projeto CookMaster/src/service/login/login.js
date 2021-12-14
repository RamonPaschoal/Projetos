const modelLogin = require('../../models/login/login');

const objErrors = {
  objErrorEmail: { 
    err: { message: 'All fields must be filled' },
  },
  objEmailOrPasswordIncorrect: { 
    err: { message: 'Incorrect username or password' },
  },
};

module.exports = async ({ email, password }) => {
  if (!email || !password) return objErrors.objErrorEmail;

  const findEmail = await modelLogin({ email, password });

  // console.log(findEmail);

  if (!findEmail) return objErrors.objEmailOrPasswordIncorrect;

  return { findEmail };
};

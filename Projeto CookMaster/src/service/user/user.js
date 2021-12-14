const modelUsers = require('../../models/user/users');
const modelFindByName = require('../../models/user/findByName');

const objErrors = {
  objErrorName: { 
    err: { message: 'Invalid entries. Try again.' },
  },
  objEmailUsed: { 
    errValid: { message: 'Email already registered' },
  },
};

const validUser = ({ name, email, password }) => {
  const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  if (!name || !email || !password || !emailRegex.test(email)) return false;

  return true;
};

module.exports = async ({ name, email, password }) => {
  if (!validUser({ name, email, password })) return objErrors.objErrorName;

  const findByName = await modelFindByName({ email });
  
  if (findByName) return objErrors.objEmailUsed;

  const dataUser = await modelUsers({ name, email, password, role: 'user' });
  
  return { dataUser };
};

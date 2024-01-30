const { User } = require('../models');

const login = async (email, _password) => {
  const findLogin = await User.findOne({ where: { email: [email] } });
  //   console.log(findLogin);
  return findLogin;
};

module.exports = {
  login,
};
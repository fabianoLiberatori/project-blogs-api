const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  const findLogin = await User.findOne({ where: { email: [email] } });
  if (!findLogin || findLogin.password !== password) {
    return {
      status: 'BAD_REQUEST',
      data: {
        message: 'Invalid fields',
      },
    };
  }
  const token = jwt
    .sign({ id: findLogin.dataValues.id, name: findLogin.dataValues.displayName }, 'secretJWT');
  return {
    status: 'OK',
    data: {
      token,
    },
  };
};

module.exports = {
  login,
};
const { User } = require('../models');
const { newToken } = require('../utils/tokenAuth');

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
  
  const payload = { id: findLogin.dataValues.id, name: findLogin.dataValues.displayName };
   
  const token = newToken(payload);
  return { status: 'OK',
    data: {
      token,
    },
  };
};

module.exports = {
  login,
};
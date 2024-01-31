const jwt = require('jsonwebtoken');
const { User } = require('../models');

const newToken = (id, name) => {
  const token = jwt.sign({
    id,
    name,
  }, process.env.JWT_SECRET);
  return token;
};

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
 
  const token = newToken(findLogin.dataValues.id, findLogin.dataValues.displayName);
  return { status: 'OK',
    data: {
      token,
    },
  };
};

const createNewUser = async (newUser) => {
  const user = await User.findOne({ where: { email: newUser.email } });
  if (user && newUser.email === user.dataValues.email) {
    return {
      status: 'CONFLICT',
      data: {
        message: 'User already registered',
      },
    };
  }
  const userCreated = await User.create(newUser);

  const token = newToken(userCreated.dataValues.id, userCreated.dataValues.displayName);
  
  return {
    status: 'CREATED',
    data: {
      token,
    },
  };
};

module.exports = {
  login,
  createNewUser,
};
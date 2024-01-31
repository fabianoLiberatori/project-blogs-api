const { User } = require('../models');
const { newToken } = require('../utils/tokenAuth');

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

  const { dataValues } = await User.create(newUser);
  const payload = { id: dataValues.id, name: dataValues.displayName };

  const token = newToken(payload);
  
  return {
    status: 'CREATED',
    data: {
      token,
    },
  };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return {
    status: 'OK',
    data: users,
  };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  console.log(user);

  if (!user) {
    return {
      status: 'NOT_FOUND',
      data: {
        message: 'User does not exist',
      },
    };
  }

  return {
    status: 'OK',
    data: user,
  };
};

module.exports = {
  createNewUser,
  getAllUsers,
  getById,
};
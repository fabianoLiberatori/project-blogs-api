const { userService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewUser = async (req, res) => {
  const { status, data } = await userService.createNewUser(req.body);
  res.status(httpMap[status]).json(data);
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewUser,
  getAllUsers,
};
const { userService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewUser = async (req, res) => {
  const { status, data } = await userService.createNewUser(req.body);
  res.status(httpMap[status]).json(data);
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await userService.getAllUsers();
  res.status(httpMap[status]).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewUser,
  getAllUsers,
  getById,
};
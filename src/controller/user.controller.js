const { userService } = require('../service');
const httpMap = require('../utils/httpMapper');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await userService.login(email, password);
  res.status(httpMap[status]).json(data);
};

const createNewUser = async (req, res) => {
  const { status, data } = await userService.createNewUser(req.body);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  login,
  createNewUser,
};
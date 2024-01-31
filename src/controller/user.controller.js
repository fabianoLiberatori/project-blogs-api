const { userService } = require('../service');
const httpMap = require('../utils/httpMapper');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await userService.login(email, password);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  login,
};
const { loginService } = require('../service');
const httpMap = require('../utils/httpMapper');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const { status, data } = await loginService.login(email, password);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  login,
};
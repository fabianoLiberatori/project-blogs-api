const { categoryService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewCategory = async (req, res) => {
  const { status, data } = await categoryService.createNewCategory(req.body);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewCategory,
};
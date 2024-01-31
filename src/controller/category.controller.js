const { categoryService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewCategory = async (req, res) => {
  const { status, data } = await categoryService.createNewCategory(req.body);
  res.status(httpMap[status]).json(data);
};

const getAllCategory = async (_req, res) => {
  const { status, data } = await categoryService.getAllCategory();
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewCategory,
  getAllCategory,
};
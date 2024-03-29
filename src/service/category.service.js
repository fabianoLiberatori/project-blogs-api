const { Category } = require('../models');

const createNewCategory = async (newCategory) => {
  const category = await Category.findOne({ where: { name: newCategory.name } });
  if (category && newCategory.name === category.name) {
    return {
      status: 'CONFLICT',
      data: {
        message: 'Category already registered',
      },
    };
  }

  const createdCategory = await Category.create(newCategory);

  return {
    status: 'CREATED',
    data: createdCategory,
  };
};

const getAllCategory = async () => {
  const category = await Category.findAll();
  return {
    status: 'OK',
    data: category,
  };
};

module.exports = {
  createNewCategory,
  getAllCategory,
};
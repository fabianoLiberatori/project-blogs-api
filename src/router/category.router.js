const { Router } = require('express');
const { categoryController } = require('../controller');
const { tokenAuth, categoryMid } = require('../middleware');

const categoryRouter = Router();

categoryRouter
  .post(
    '/categories',
    tokenAuth,
    categoryMid.createNewCategory,
    categoryController.createNewCategory,
  )
  .get('/categories', tokenAuth, categoryController.getAllCategory);

module.exports = categoryRouter;
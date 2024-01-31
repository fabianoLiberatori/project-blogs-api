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
  );

module.exports = categoryRouter;
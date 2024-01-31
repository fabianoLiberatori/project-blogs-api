const { Router } = require('express');
const { userController, loginController } = require('../controller');
const { userMid, tokenAuth } = require('../middleware');

const userRouter = Router();

userRouter.post('/login', userMid.inputUserValid, loginController.login)
  .post('/user', userMid.createNewUser, userController.createNewUser)
  .get('/user', tokenAuth, userController.getAllUsers)
  .get('/user/:id', tokenAuth, userController.getById);

module.exports = userRouter;
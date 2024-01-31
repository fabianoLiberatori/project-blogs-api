const { Router } = require('express');
const { userController, loginController } = require('../controller');
const { userMid, tokenAuth } = require('../middleware');

const userRouter = Router();

userRouter.post('/login', userMid.inputUserValid, loginController.login);
userRouter.post('/user', userMid.createNewUser, userController.createNewUser);
userRouter.get('/user', tokenAuth, userController.getAllUsers);

module.exports = userRouter;
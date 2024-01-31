const { Router } = require('express');
const { userController } = require('../controller');
const { userMid } = require('../middleware');

const userRouter = Router();

userRouter.post('/login', userMid.inputUserValid, userController.login);
userRouter.post('/user', userMid.createNewUser, userController.createNewUser);

module.exports = userRouter;
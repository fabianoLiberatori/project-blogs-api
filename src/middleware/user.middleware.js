const joi = require('joi');

const inputLogin = joi.object({
  email: joi.string().required().min(1),
  password: joi.string().required().min(1),
});

const newUserValid = joi.object({
  displayName: joi.string().required().min(8).messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
  }),
  password: joi.string().required().min(6).messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: joi.allow(),
});

const inputUserValid = (req, res, next) => {
  const inputError = inputLogin.validate(req.body);
  if (inputError.error) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const createNewUser = (req, res, next) => {
  const newUser = newUserValid.validate(req.body);
  if (newUser.error) {
    return res.status(400).json({
      message: newUser.error.message,
    });
  }
  next();
};

module.exports = { 
  inputUserValid,
  createNewUser,
};
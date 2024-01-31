const joi = require('joi');

const inputLogin = joi.object({
  email: joi.string().required().min(1),
  password: joi.string().required().min(1),
});

const inputUserValid = (req, res, next) => {
  const inputError = inputLogin.validate(req.body);
  if (inputError.error) {
    console.log();
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = { 
  inputUserValid,
};
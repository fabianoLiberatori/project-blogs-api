const joi = require('joi');

const nameRequired = joi.object({
  name: joi.string().required(),
});

const createNewCategory = (req, res, next) => {
  const newCategory = nameRequired.validate(req.body);
  if (newCategory.error) {
    return res.status(400).json({
      message: newCategory.error.message,
    });
  }
  next();
};

module.exports = {
  createNewCategory,
};
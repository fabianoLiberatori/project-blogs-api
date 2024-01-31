const { tokenValidate } = require('../utils/tokenAuth');

const tokenValid = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  const [, token] = authorization.split(' ');
  
  try {
    const decodedToken = tokenValidate(token);
    res.locals.userId = decodedToken.id;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = tokenValid;
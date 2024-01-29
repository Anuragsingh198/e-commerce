const { stack } = require("../routes/ProductsRoutes");

const errorHandler = (e, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: e.message,
    stack: process.env.NODE_ENV === 'production' ? null : e.stack, // Corrected variable name
  });
};

module.exports = {errorHandler};

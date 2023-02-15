const ErrorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Server error");
};

module.exports = ErrorHandler;

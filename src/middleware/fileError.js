module.exports = function (err, req, res, next) {
  if (err) {
    return res.status(500).send({
      errors: [{ title: "File upload error", details: err.message }],
    });
  }
  next();
};

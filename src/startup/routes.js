const upload = require("../routes/upload");

function routes(app) {
  app.use("/api/upload", upload);
}

module.exports = routes;

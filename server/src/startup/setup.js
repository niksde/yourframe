const bodyParser = require("body-parser");
const cors = require("cors");

function setup(app) {
  app.use(cors());
  app.options("*", cors());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json());
}

module.exports = setup;

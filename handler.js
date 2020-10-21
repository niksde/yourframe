const serverless = require("serverless-http");
const express = require("express");

const app = express();

require("./src/startup/setup")(app);
require("./src/startup/routes")(app);

module.exports.handler = serverless(app);

const express = require("express");
require("dotenv").config();
const PastLanchesController = require("./modules/past-lauches/past-lauches.controller");
const UpcomingLanchesController = require("./modules/upcoming-lauches/upcoming-lauches.controller");
const errorHandler = require("./modules/middleware/errorHandler.middleware");

const app = express();
app.use("/past-launches", PastLanchesController);
app.use("/upcoming-launches", UpcomingLanchesController);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log("app up and running on port", process.env.PORT);
});

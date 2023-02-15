const express = require("express");
require("dotenv").config();
const { PastLaunchesController } = require("./modules/past-launches");
const { UpcomingLaunchesController } = require("./modules/upcoming-launches");
const { errorHandler } = require("./modules/middleware");

const app = express();
app.use("/past-launches", PastLaunchesController);
app.use("/upcoming-launches", UpcomingLaunchesController);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log("app up and running on port", process.env.PORT);
});

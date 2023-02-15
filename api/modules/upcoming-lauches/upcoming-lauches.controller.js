const express = require("express");
const UpcomingLaunchesService = require("./upcoming-lauches.service");

const UpcomingLaunchesController = express.Router();
const pastLanchesService = new UpcomingLaunchesService();
UpcomingLaunchesController.get("/", async (req, res, next) => {
  try {
    res.send(await pastLanchesService.findAll());
  } catch (err) {
    console.log(111,err)
    next(err);
  }
});

module.exports = UpcomingLaunchesController;

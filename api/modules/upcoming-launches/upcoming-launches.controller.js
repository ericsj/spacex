const express = require("express");
const UpcomingLaunchesService = require("./upcoming-launches.service");

const UpcomingLaunchesController = express.Router();
const pastLaunchesService = new UpcomingLaunchesService();
UpcomingLaunchesController.get("/", async (req, res, next) => {
  try {
    res.send(await pastLaunchesService.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = UpcomingLaunchesController;

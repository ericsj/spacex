const express = require("express");
const UpcomingLaunchesService = require("./upcoming-launches.service");

const UpcomingLaunchesController = express.Router();
const upcomingLaunchesService = new UpcomingLaunchesService();
UpcomingLaunchesController.get("/", async (req, res, next) => {
  try {
    res.send(await upcomingLaunchesService.findAll());
  } catch (err) {
    next(err);
  }
});
UpcomingLaunchesController.get("/next", async (req, res, next) => {
  try {
    res.send(await upcomingLaunchesService.findNext());
  } catch (err) {
    next(err);
  }
});

module.exports = UpcomingLaunchesController;

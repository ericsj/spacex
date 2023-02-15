const express = require("express");
const PastLaunchesService = require("./past-launches.service");

const PastLaunchesController = express.Router();
const pastLaunchesService = new PastLaunchesService();
PastLaunchesController.get("/", async (req, res, next) => {
  try {
    res.send(await pastLaunchesService.findAll());
  } catch (err) {
    next(err);
  }
});
PastLaunchesController.get("/last", async (req, res, next) => {
  try {
    res.send(await pastLaunchesService.findLast());
  } catch (err) {
    next(err);
  }
});

module.exports = PastLaunchesController;

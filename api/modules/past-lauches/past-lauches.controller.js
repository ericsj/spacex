const express = require("express");
const PastLaunchesService = require("./past-lauches.service");

const PastLanchesController = express.Router();
const pastLanchesService = new PastLaunchesService();
PastLanchesController.get("/", async (req, res, next) => {
  try {
    res.send(await pastLanchesService.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = PastLanchesController;

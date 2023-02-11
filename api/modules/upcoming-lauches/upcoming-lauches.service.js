const axios = require("axios");
const prisma = require("../../db");
const { formatUpcomingLaunch } = require("./util");

module.exports = class UpcomingLaunchesService {
  constructor() {
    this.populateDb();
  }

  async findAll() {
    const data = await prisma.UpcomingLaunch.findMany({
      orderBy: {
        date: "asc",
      },
    });
    return data;
  }

  async populateDb() {
    const config = {
      url: "https://api.spacexdata.com/v4/launches/upcoming",
    };
    const upcomingLaunches = await axios(config);
    await prisma.UpcomingLaunch.deleteMany();
    await prisma.UpcomingLaunch.createMany({
      data: upcomingLaunches.data.map(formatUpcomingLaunch),
    });
  }
};

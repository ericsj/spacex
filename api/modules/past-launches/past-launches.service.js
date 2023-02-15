const axios = require("axios");
const prisma = require("../../db");
const { formatPastLaunch } = require("./util");

class PastLaunchesService {
  constructor() {
    this.populateDb();
  }

  async findAll() {
    const data = await prisma.PastLaunch.findMany({
      orderBy: {
        date: "desc",
      },
    });
    return data;
  }

  async populateDb() {
    const config = {
      url: "https://api.spacexdata.com/v4/launches/past",
    };
    const pastLaunches = await axios(config);
    await prisma.PastLaunch.deleteMany();
    await prisma.PastLaunch.createMany({
      data: pastLaunches.data.map(formatPastLaunch),
    });
  }
}

module.exports = PastLaunchesService;

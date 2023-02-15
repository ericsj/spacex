module.exports = {
  formatUpcomingLaunch: (launch) => ({
    name: launch.name,
    date: launch.date_utc,
    details: launch.details,
    flightNumber: launch.flight_number,
  }),
};

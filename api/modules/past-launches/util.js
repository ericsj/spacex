module.exports = {
  formatPastLaunch: (launch) => ({
    name: launch.name,
    date: launch.date_utc,
    details: launch.details,
    success: launch.success,
  }),
};

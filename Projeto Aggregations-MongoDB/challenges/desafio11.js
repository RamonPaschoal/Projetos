db.trips.aggregate([
  {
    $group: {
      _id: { $dayOfWeek: { date: "$startTime" } },
      totalTravel: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      diaDaSemana: "$_id",
      total: "$totalTravel",
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $limit: 1,
  },
]);

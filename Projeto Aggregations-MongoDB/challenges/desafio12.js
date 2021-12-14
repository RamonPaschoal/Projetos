db.trips.aggregate([
  {
    $project: {
      _id: 0,
      startStationName: 1,
      dayWeek: { $dayOfWeek: { date: "$startTime" } },
    },
  },
  {
    $match: {
      dayWeek: 5,
    },
  },
  {
    $group: {
      _id: "$startStationName",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id",
      total: "$count",
    },
  },
  {
    $limit: 1,
  },
]);

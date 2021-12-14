db.trips.aggregate([
  {
    $group: {
      _id: "$bikeid",
      duracaoMediaEmMilissegundos: {
        $avg: {
          $subtract: ["$stopTime", "$startTime"],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMedia: {
        $ceil: {
          $divide: [
            "$duracaoMediaEmMilissegundos",
            60 * 1000,
          ],
        },
      },
    },
  },
  {
    $sort: {
      duracaoMedia: -1,
    },
  },
  {
    $limit: 5,
  },
]);

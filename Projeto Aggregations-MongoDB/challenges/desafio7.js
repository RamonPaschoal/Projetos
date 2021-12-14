db.movies.aggregate([
  {
    $unwind: "$cast",
  },
  {
    $match: {
      languages: "English",
    },
  },
  {
    $group: {
      _id: "$cast",
      countMovie: { $sum: 1 },
      avgIMDB: { $avg: "$imdb.rating" },
    },
  },
  {
    $project: {
      _id: 1,
      numeroFilmes: "$countMovie",
      mediaIMDB: { $round: ["$avgIMDB", 1] },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);

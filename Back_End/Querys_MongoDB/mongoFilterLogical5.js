db.getCollection('restaurants').find({
    $and: [
      { $or: [{ rating: { $gte: 6, $lt: 10 } }] },
      { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
  }).count();
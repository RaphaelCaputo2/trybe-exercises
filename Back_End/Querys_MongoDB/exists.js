db.getCollection('restaurants').find({
    rating: {
        $exists: false
    }
    })
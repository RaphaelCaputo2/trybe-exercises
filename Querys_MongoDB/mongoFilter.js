db.getCollection('restaurants').find({
    cuisine: {
        $ne: "American" 
    }
   
    }).count()
db.getCollection('restaurants').find({
    rating: {
        $nin: [
        5,
        6,
        7
       ] 
    }
   
    })
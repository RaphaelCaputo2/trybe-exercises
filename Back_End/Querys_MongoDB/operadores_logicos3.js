db.getCollection('restaurants').find({
    $or: [{
        rating: { $gte: 6},
        
         borough: "Brooklyn" 
        
        
        }]
    
    
    })
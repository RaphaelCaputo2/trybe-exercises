const connect = require('../../config/conn');
const { ObjectId } = require('mongodb');

const getAllNationality = async () => {
connect().then(db => db.collection('authors').findOne({}).toArray())
.catch(err => console.log('erro ' + err))
return result;
}

module.exports = getAllNationality;




// connection()
// .then(db => db.collection('authors').find({}).toArray())
// .catch(err => console.log('oi'))
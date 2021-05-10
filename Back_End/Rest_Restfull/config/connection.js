const { MongoClient } = require('mongodb');
const MONGODB_URL = 'mongodb://127.0.0.1:27017';
const connection =  async () => {
   try {
    const conn = await MongoClient.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return conn.db('userDB');
  } catch (err) {
    return console.log('erro na conectividade ' + err);
  }
  

};

module.exports = connection;

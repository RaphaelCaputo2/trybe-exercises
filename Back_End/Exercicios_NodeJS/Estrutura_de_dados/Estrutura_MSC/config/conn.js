const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017';


const connection = () => {
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db('model_example'))
  .catch((err) =>  console.log('Erro ao se conectar' + err));
}
connection()

module.exports = connection;
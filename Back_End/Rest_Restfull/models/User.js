const connection = require('../config/connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('users').find().toArray())
    .catch((err) => console.log('erro ' + err));
};

const findById = async (id) => {
  return await connection().then((db) => db.collection('users').findOne(ObjectId(id)));
};

const create = async (name, email) => {
   await connection().then((db) => db.collection('users').insertOne({ name, email }));
};

module.exports = {
  getAll,
  findById,
  create,
};

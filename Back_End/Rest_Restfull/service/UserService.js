const { ObjectId } = require('mongodb');
const User = require('../models/User');
const getAll = async () => {
 return await User.getAll()
};

const findById = async (id) => {
  return await User.findById(id)
};

const create = async (name, email) => {
   await User.create(name, email)
};

module.exports = {
  getAll,
  findById,
  create,
};
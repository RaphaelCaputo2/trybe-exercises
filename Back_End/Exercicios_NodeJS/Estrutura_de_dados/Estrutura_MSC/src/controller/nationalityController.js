const {getAllNationality} = require('../model/nationalityModel');

const getAll = async (_req, res) => {
  try {
    const results = await getAllNationality;
    // console.log(results)
    res.status(200).send(results);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = {
  getAll,
};

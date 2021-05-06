const connection = require('./connection');

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
 const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors',
  );
  return authors.map(serialize);
};

module.exports = {
  getAll,
};

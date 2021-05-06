const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
  .filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
 return connection()
 .then((db) => db.collection('authors').find().toArray())
 .then((authors) => {
   return authors.map(({_id, firstName, middleName, lastName}) => {
     return getNewAuthor({
       id: _id,
       firstName,
       middleName,
       lastName
     })
   })
 })
};

module.exports = {
  getAll,
};

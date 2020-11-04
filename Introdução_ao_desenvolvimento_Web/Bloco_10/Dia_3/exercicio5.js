let firstFunction = str => {
  return str.toUpperCase();
};
let secondFunction = str => {
  return str.charAt(0);
};
let thirdFunction = str => {
  return (str1, str2) => str1.concat(str2);
};

module.exports = { firstFunction, secondFunction, thirdFunction };

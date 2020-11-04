const longestWord = (text) => {
  let letrasArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  for (let i of letrasArray) {
    if (i.length > maxLength) {
      maxLength = i.length;
      result = i;
    }
  }
  console.log(result);
};
longestWord('o peito do pe do pedro é preto'); //

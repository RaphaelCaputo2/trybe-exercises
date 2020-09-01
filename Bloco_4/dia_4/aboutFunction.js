function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindrome('raphael'));

  //Essa questão foi pega no gabarito, para ser estudada!
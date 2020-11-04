//Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele

const name = {
fistName: "Raphael",
lastName: "Caputo"
};
// const functionName = (name) => {
//   const names = [];
//   for(firstName in name) {
//     firstName.push(name[names]);
//   }
//   return functionName;
// }

const function2 = (name) => Object.values(name);

console.log(function2(name));
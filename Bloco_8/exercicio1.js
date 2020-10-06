let nomes = [{
  nome: 'Raphael',
  sobrenome: 'Caputo',
  anoNascimento: 1988
},
{
  nome: 'Vera',
  sobrenome: 'Alice',
  anoNascimento: 1959
}];

nomes.forEach((parameter1) => {
  if (parameter1.anoNascimento === 1959 || parameter1.nome === 'Vera') {
    console.log('Parabens conseguimos');
  }
 
return nomes;

})
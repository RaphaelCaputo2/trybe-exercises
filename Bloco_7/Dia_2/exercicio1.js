const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listaDeSkill = (student) => {
  const listaDeArray = Object.keys(student);
  for (let i in listaDeArray) {
    console.log(`Suas Skills ${listaDeArray[i]}, Nível: ${student[listaDeArray[i]]}`);
  }
};
console.log('Estudante 1');
listaDeSkill(student1);

console.log('Estudante 2');
listaDeSkill(student2);
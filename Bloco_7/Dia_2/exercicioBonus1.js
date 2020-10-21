const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const AllLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const quantidadeAlunos = (obj) => {
  let total = 0;
  let array = Object.keys(obj);
  for(let i in array) {
    if(obj[array[i]].materia === 'História'){
      total += obj[array[i]].numeroEstudantes;
    }
  }
  return total;
}


console.log(quantidadeAlunos(AllLessons));
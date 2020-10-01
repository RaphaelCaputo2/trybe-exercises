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


const verificar = (obj, key, values) => {
  const entries = Object.entries(obj);
  console.log(entries);
  let iguais = false;
  for(let i in entries) {
    if(entries[i][0] === key && entries[i][1] === values) 
    iguais = true;
  }
  return iguais;
}

console.log(verificar(lesson1, 'turno', 'manhã'));
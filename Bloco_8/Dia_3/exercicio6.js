    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

//Gabarito
function studentAverage() {
  const nameAndAverage = students.map((student, index)=> ({
    name: student,
    media: (notes[index].reduce((acc, curr)=> acc+curr, 0 ) / notes[index].length),
  }));
  return nameAndAverage;
}


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);
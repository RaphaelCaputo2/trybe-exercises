const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: 'Mars',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: 'kilometers',
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: 'kilometers',
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: 'kilometers',
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
//Por causa da funçao setTimeout, os logs serao impressos nessa sequencia: A(nao tem a função setTimeout), C(tem a função setTimeOut, que aguarda 2 segundos para ser executada) e por ultimo B(que aguarda 3 segundos para ser executada)

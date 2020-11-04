const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => {
    console.log(
      `Returnerd planet: ${mars.name} ${mars.distanceFromSun.value} ${mars.distanceFromSun.measurementUnit}`,
    );
  }, 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

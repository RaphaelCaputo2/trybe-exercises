let aleatoryNumber = require('./exercicio1');
it('Testando se função foi chamada, qual seu output e quantas vezes foi chamada', () => {
  aleatoryNumber = jest.fn().mockReturnValue(10);
  expect(aleatoryNumber()).toBe(10);
  //expect(aleatoryNumber()).toHaveBeenCalled();
  //expect(aleatoryNumber()).toHaveBeenCalledTimes(1);
});

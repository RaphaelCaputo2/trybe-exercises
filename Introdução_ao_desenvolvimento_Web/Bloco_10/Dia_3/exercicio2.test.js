let aleatoryNumber = require('./exercicio2');

test('Criando função que recebe dois valores, e divide o primeiro pelo segundo', () => {
  aleatoryNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(aleatoryNumber(10, 2)).toBe(5);
  expect(aleatoryNumber).toHaveBeenCalled();
  expect(aleatoryNumber).toHaveBeenCalledTimes(1);
});

let aleatoryNumber = require('./exercicio2');

describe('Fazendo multiplicações e depois resetando e retornar o dobro', () => {
  it('mockando a função para receber os 3 parametros e multiplica-los', () => {
    aleatoryNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(aleatoryNumber(3, 3, 5)).toEqual(45);
    expect(aleatoryNumber).toHaveBeenCalled();
    expect(aleatoryNumber).toHaveBeenCalledTimes(1);
  });
  it('Mudando parametros para retornar seu dobro', () => {
    aleatoryNumber.mockReset();
    expect(aleatoryNumber).toHaveBeenCalledTimes(0);
    aleatoryNumber.mockImplementation(a => a * 2);
    expect(aleatoryNumber(3)).toBe(6);
    expect(aleatoryNumber).toHaveBeenCalledTimes(1);
  });
});

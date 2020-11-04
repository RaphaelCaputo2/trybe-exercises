let service = require('./exercicio5');
jest.mock('./exercicio5');

describe('testando maiuscula', () => {
  it('Testando passar string para caixa baixa', () => {
    service.firstFunction.mockImplementation(a => a.toLowerCase());
    expect(service.firstFunction('UPPERCASE')).toBe('uppercase');
    expect(service.firstFunction).toHaveBeenCalled();
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
  });
  it('Testando para voltar somente a ultima letra', () => {
    service.secondFunction.mockImplementation(a => a.charAt(a.length[0]));

    expect(service.secondFunction('letter')).toBe('l');
    expect(service.secondFunction).toHaveBeenCalled();
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
  });

  it('Fazendo a função que recebe os 3 parametros e concatena', () => {
    service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));
    expect(service.thirdFunction('tr', 'y', 'be')).toBe('trybe');
    expect(service.thirdFunction).toHaveBeenCalled();
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
  });
});

let service = require('./exercicio5');
describe('testando novos testes', () => {
  it('Testando função para receber parametro e depois resetando', () => {
    const first = jest.spyOn(service, 'firstFunction').mockImplementation(a => a.toLowerCase());
    expect(first('UPPERCASE')).toBe('uppercase');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    service.firstFunction.mockRestore();
    expect(service.firstFunction('lowercase')).toBe('LOWERCASE');
  });
});

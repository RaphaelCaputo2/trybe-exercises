const service = require('./exercicio7');
describe('testando requisição na api', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);
  test('caso a primeira requisição de resolve', async () => {
    service.fetchDog.mockResolvedValue('Request Sucess');
    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    expect(service.fetchDog()).resolves.toBe('Request Sucess');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });
  test('caso a primeira requisição de reject', async () => {
    service.fetchDog.mockRejectedValue('request failed');
    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    expect(service.fetchDog()).resolves.toBe('Request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });
});

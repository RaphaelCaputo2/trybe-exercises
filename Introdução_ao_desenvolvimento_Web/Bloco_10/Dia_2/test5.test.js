beforeEach(() => console.log('Antes do test'));
test('', () => console.log('O teste'));
afterEach(() => console.log('Depois do teste'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

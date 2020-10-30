const uppercase = require('./toUpperCase');

it('changed a string to uppercase', () => {
  uppercase('raphael', (str) => {
    expect(str).toBe('RAPHAEL');
    
  })
})
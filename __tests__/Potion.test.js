const Potion = require('../lib/Potion');

test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toBe(expect.any(Number));
});
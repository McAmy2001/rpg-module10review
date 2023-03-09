const { default: JestHasteMap } = require('jest-haste-map');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
console.log(new Potion());

test('creates a player object', () => {
  const player = new Player('Amy');

  expect(player.name).toBe('Amy');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});
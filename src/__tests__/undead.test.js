import Undead from '../js/undead';

test('проверяем андеда', () => {
  const character = new Undead('Jkal', 'Undead');
  expect(character).toEqual({
    name: 'Jkal',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

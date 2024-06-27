import Magician from '../js/magician';

test('проверяем мага', () => {
  const character = new Magician('Mika', 'Magician');
  expect(character).toEqual({
    name: 'Mika',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

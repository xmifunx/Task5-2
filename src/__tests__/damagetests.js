import Magician from '../js/magician';

test('проверяем нанесение урона', () => {
  const character = new Magician('Mika', 'Magician');
  character.damage(20);
  expect(character).toEqual({
    name: 'Mika',
    type: 'Magician',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('проверяем, что нанесение урона не опускает хп ниже нуля', () => {
  const character = new Magician('Mika', 'Magician');
  character.health = 5;
  character.damage(20);
  expect(character).toEqual({
    name: 'Mika',
    type: 'Magician',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

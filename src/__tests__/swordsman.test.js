import Swordsman from '../js/swordsman';

test('проверяем мечника', () => {
  const character = new Swordsman('Guts', 'Swordsman');
  expect(character).toEqual({
    name: 'Guts',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

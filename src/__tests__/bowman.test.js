import Bowman from '../js/bowman';

test('проверяем лучника', () => {
  const character = new Bowman('Alex', 'Bowman');
  expect(character).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

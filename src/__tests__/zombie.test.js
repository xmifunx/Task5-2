import Zombie from '../js/zombie';

test('проверяем зомби', () => {
  const character = new Zombie('Vakh', 'Zombie');
  expect(character).toEqual({
    name: 'Vakh',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

import Daemon from '../js/daemon';

test('проверяем демона', () => {
  const character = new Daemon('Got', 'Daemon');
  expect(character).toEqual({
    name: 'Got',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

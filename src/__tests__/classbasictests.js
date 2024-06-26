import Character from '../js/character';
import Bowman from '../js/bowman';
import Daemon from '../js/daemon';
import Magician from '../js/magician';
import Swordsman from '../js/swordsman';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

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

test('Проверяем корректность имени', () => {
  expect(() => new Character('B', 'Bowman')).toThrowError(new Error('Name character must be > 2 and < 10 symbol'));
});

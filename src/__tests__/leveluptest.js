import Magician from '../js/magician';
import Swordsman from '../js/swordsman';

test('проверяем левелап мага', () => {
  const character = new Magician('Mika', 'Magician');
  character.levelUp();
  expect(character).toEqual({
    name: 'Mika',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('проверяем левелап мечника', () => {
  const character = new Swordsman('Guts', 'Swordsman');
  character.levelUp();
  expect(character).toEqual({
    name: 'Guts',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test('на ошибку левелапа при 0 хп', () => {
  const character = new Magician('Mika', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Количество хп равно нулю. Персонаж мёртв.'));
});

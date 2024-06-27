import Character from '../js/character';

test('Проверяем корректность имени', () => {
  expect(() => new Character('B', 'Bowman')).toThrowError(new Error('Name character must be > 2 and < 10 symbol'));
});

test('Проверяем тип существа', () => {
  expect(() => new Character('Bowie', 'Onion')).toThrowError(new Error('Unknown species'));
});

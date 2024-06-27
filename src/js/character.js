export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name character must be > 2 and < 10 symbol');
    } else {
      this.name = name;
    }

    const types = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Unknown species');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Количество хп равно нулю. Персонаж мёртв.');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

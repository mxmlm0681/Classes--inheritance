import Character from "../app";
import Boweman from "../Boweman";
import Deamon from "../deamon";
import Magician from "../magician";
import Swordsman from "../swordsman";
import Undead from "../undead";
import Zombie from "../zombie";

test('Имя не является строкой', () => {
  expect(() => new Character(7, 'Deamon')).toThrow();
});

test('Слишком короткое имя', () => {
  expect(() => new Character('A', 'Swordsman')).toThrow();
});

test('Слишком длинное имя', () => {
  expect(() => new Character('Torian Brunhald', 'Bowman')).toThrow();
});

test('Неверный тип персонажа', () => {
  expect(() => new Character('Goblin', 'Dwarf')).toThrow();
});

test('Create Bowman', () => {
  const character = new Boweman('Artur');
  const expected = {
    name: 'Artur',
    level: 1,
    health: 100,
    type: 'Boweman',
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expected);
});

test('Create Deamon', () => {
  const character = new Deamon('Khaal');
  const expected = {
    name: 'Khaal',
    level: 1,
    health: 100,
    type: 'Deamon',
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(expected);
});

test('Create Magician', () => {
  const character = new Magician('Merlin');
  const expected = {
    name: 'Merlin',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(expected);
});

test('Create Swordsman', () => {
  const character = new Swordsman('Aragorn');
  const expected = {
    name: 'Aragorn',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  expect(character).toEqual(expected);
});

test('Create Undead', () => {
  const character = new Undead('Century');
  const expected = {
    name: 'Century',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expected);
});

test('Create Zombie', () => {
  const character = new Zombie('Nobady');
  const expected = {
    name: 'Nobady',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  expect(character).toEqual(expected);
});

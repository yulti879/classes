import Character from "../../parent-character";

import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from "../../characters";

test('Character with valid name and type should be created successfully', () => {
    const character = new Bowman('Лучник');
    expect(character.name).toBe('Лучник');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
});

test('Character with invalid name should throw an error', () => {
    expect(() => new Bowman('')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    expect(() => new Bowman(1)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    expect(() => new Bowman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');    
    expect(() => new Bowman('АБВГДЕЖЗИКЛ')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Character with invalid type should throw an error', () => {
    expect(() => new Character('Герой', 'type')).toThrow('Некорректный тип персонажа');
});
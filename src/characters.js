import Character from './parent-character';

class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
    }
}

export { Bowman, Swordsman, Magician, Undead, Zombie, Daemon };
'use strict';

class Person {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    #speak() {
        console.log(`Язык: ${this.language} - ${this.name}`);
    }
    speak() {
        this.#speak();
    }

}


class Orc extends Person {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    kick() {
        console.log('Совершён удар');
    }

    speak() {
        console.log(`Орк говорит на языке ${this.language}, его зовут ${this.name}`);
    }
}


class Elf extends Person {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }

    createSpell() {
        console.log('Сотворено заклинание');
    }

    speak() {
        console.log(`Эльф говорит на языке ${this.language}, его зовут ${this.name}`);
    }
}

// -----------------------------------------------------

let orcInstance1 = new Orc('rus', 'Ivan', 'Russian', 'axe');
let orcInstance2 = new Orc('fin', 'Yussi', 'Finnish', 'spear');

let elfInstance1 = new Elf('rus', 'Ivan', 'Russian', 'ice');
let elfInstance2 = new Elf('fin', 'Yussi', 'Finnish', 'fire');

console.log(orcInstance1);
console.log(orcInstance2);
orcInstance1.speak();
orcInstance1.kick();
orcInstance2.speak();
orcInstance2.kick();

console.log(elfInstance1);
console.log(elfInstance2);
elfInstance1.speak();
elfInstance1.createSpell();
elfInstance2.speak();
elfInstance2.createSpell();

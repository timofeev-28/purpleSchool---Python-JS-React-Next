'use strict';

const Person = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}
Person.prototype.speak = function() {
    console.log(`Язык: ${this.language} - ${this.name}`)
}
//--------------------

const Orc = function(race, name, language, weapon) {
    Person.apply(this, arguments);
    this.weapon = weapon;
}
Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.kick = function() {
    console.log('Совершён удар');
}
//--------------------

const Elf = function(race, name, language, spell) {
    Person.apply(this, arguments);
    this.spell = spell;
}
Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function() {
    console.log('Сотворено заклинание');
}
//--------------------


let orcInstance1 = new Orc('rus', 'ivan', 'russian', 'axe');
let orcInstance2 = new Orc('fin', 'yussi', 'finnish', 'spear');

let elfInstance1 = new Elf('rus', 'ivan', 'russian', 'ice');
let elfInstance2 = new Elf('fin', 'yussi', 'finnish', 'fire');

// -- вывод в консоль --
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

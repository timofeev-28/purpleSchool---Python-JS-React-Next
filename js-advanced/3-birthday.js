'use strict';

const isValidAge = (date) => {
    const dateOfBirth = new Date(date);
    const dateAge14 = new Date(dateOfBirth.getFullYear() + 14, dateOfBirth.getMonth(), dateOfBirth.getDate());

    return Date.now() > dateAge14.getTime();
}

console.log(isValidAge('2014-02-10')); // false;
console.log(isValidAge('2010-02-10')); // true;

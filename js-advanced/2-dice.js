'use strict';

// данные по многогранникам
const rice = {d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d16: 16, d20: 20}

const getRandomNum = (rice) => {
    const min = 1;
    const max = rice;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    return `Число граней ${rice} - выпавшее число ${randomNum}`;
}

// вывод в консоль
Object.keys(rice).map(key => console.log(getRandomNum(rice[key])));

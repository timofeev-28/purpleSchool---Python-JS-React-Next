'use srtict';

const array = [
    {id: 5, name: 'Софа'},
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
];

const getFilteredArr = (array) => {
    return [...new Set(array.map(item => item.id))]
                .map(el => array.find(item => item.id === el));
}

console.log(array);
console.log(getFilteredArr(array));

'use strict';

// ВАРИАНТ 1

function getPromise1(delay) {
    return new Promise((resolve) => setTimeout(() => resolve(`Самый быстрый промис: ${delay} ms`), delay));
}

function race(arrPromises) {
  return new Promise((resolve, reject) => {
    arrPromises.forEach(promise => promise.then(resolve).catch(reject));
  })
}

race([getPromise1(400), getPromise1(300), getPromise1(100)])
  .then(console.log)
  .catch(err => console.log('Ошибка', err))

  // ----------------------------

// ВАРИАНТ 2

function getPromise2() {
    return fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
            .then(response => {
              if (!response.ok) {
                throw new Error(err);
              }
              return response.json()
            })
            .then(res => res.text);
}

function race1(arrPromises) {
  return new Promise((resolve, reject) => {
    arrPromises.forEach(promise => promise.then(resolve).catch(reject));
  })
}

race1([getPromise2(), getPromise2(), getPromise2()])
  .then(console.log)
  .catch(err => console.error(err));

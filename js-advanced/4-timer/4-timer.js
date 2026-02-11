'use strict';

const timer = document.querySelector('.timer');

const getTimerBeforeNewYear = () => {
    const timeHappyNY = (new Date(new Date().getFullYear(), 11, 32)).getTime();

    const changeOutputFormat = (num) => {
        return num < 10 ? '0' + num : num;
    }

    const setId = setInterval(() => {
        let diff = timeHappyNY - Date.now();
        if (diff <= 1000) {
            timer.textContent = `C Новым ${new Date().getFullYear()} Годом!`;
            clearInterval(setId);
            return;
        }

        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30) % 12);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor(diff / 1000 % 60);

        timer.textContent =
            `${changeOutputFormat(months)} месяцев,
            ${changeOutputFormat(days)} дней,
            ${changeOutputFormat(hours)} часов,
            ${changeOutputFormat(minutes)} минут,
            ${changeOutputFormat(seconds)} секунд`;
    }, 1000);
}

getTimerBeforeNewYear();

/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector('.js-click');
const box = document.querySelector('.js-box');
let shift = 0;

const handleClick = () => {
  shift += 50;
  box.style.transform = `translate(${shift}px, ${shift}px)`;
};

clickMe.addEventListener('click', handleClick);

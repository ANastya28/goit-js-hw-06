// const ref = {
//   button: document.querySelector(`.change-color`),
//   bodyEl: document.querySelector(`body`),
//   textColorValue: document.querySelector(`.color`),
// }

const button = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const textColorValue = document.querySelector(`.color`)

button.addEventListener(`click`, onButtonClick);

function onButtonClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorValue.textContent = bodyEl.currentTarget.value;
  console.log(event.currentTarget.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
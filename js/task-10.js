const createBoxButton = document.querySelector(`[data-create]`);
const destroyBoxButton = document.querySelector(`[data-destroy]`);
const divBoxes = document.querySelector(`#boxes`);
const counter = document.querySelector(`input`);


  
createBoxButton.addEventListener("click", createBoxes);
destroyBoxButton.addEventListener("click", destroyBoxes);
counter.addEventListener("click", amount);

let step = 30;

function createBoxes(amount) {
  let markupEl = `<div</div>`;
  step += 10;
  markupEl.style.width = `${step}px`;
  markupEl.style.heigh = `${step}px`;
  markupEl.style.backgroundColor = getRandomHexColor();

  divBoxes.insertAdjacentHTML("afterbegin", markupEl);

}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amout = 

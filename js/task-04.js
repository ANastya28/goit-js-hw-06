const decrement = document.querySelector(`button[data-action="decrement"]`);
console.log(decrement);

const increment = document.querySelector(`button[data-action="increment"]`);
console.log(increment);

const value = document.querySelector(`#value`);
console.log(value);

let counterValue = 0;

decrement.addEventListener(`click`, onButtonClick);

function onButtonClick(event) {
    console.log(`click`);
};


const inputValue = document.querySelector("#validation-input");
const totalLenght = inputValue.getAttribute("data-length");
const inputLenght = parseInt(totalLenght, 10);

inputValue.addEventListener(`input`, onEventionInput);

function onEventionInput() {
    const onFocus = inputValue.addEventListener("focus", () => {});

    if (!onFocus) {
        inputValue.addEventListener("blur", () => {
            if (inputValue.value.length === inputLenght) {
           
                inputValue.classList.add("valid");
            } else if (inputValue.value.length === 0) {
                inputValue.classList.remove("valid");
    
            } else inputValue.classList.add("invalid");
        });
    }
}



// .......................................................................................................................



// const inputValue = document.getElementById("validation-input");

// const totalLenght = inputValue.getAttribute("data-length");
// const inputLenght = parseInt(totalLenght, 10);

// inputValue.oninput = function() {
//   if (inputValue.value.length === inputLenght) {
//     inputValue.classList.remove("invalid");
//     inputValue.classList.add("valid");
//   }
//   if (inputValue.value.length === 0) {
//     inputValue.classList.remove("valid");
//     inputValue.classList.remove("invalid");
//   }
//   if (inputValue.value.length !== inputLenght && inputValue.value.length !== 0) {
//     inputValue.classList.add("invalid");
//   }
// };






// textInput.addEventListener("focus", () => {
//     textInput.value = "yes";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// console.log(textInput);

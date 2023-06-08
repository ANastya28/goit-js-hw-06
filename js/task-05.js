const refs = {
    input: document.querySelector(`#name-input`),
    nameInput: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, onIntputChange);

function onIntputChange(event) {
    // console.log(event.currentTarget.value);
    return refs.nameInput.textContent = "" ? refs.nameInput.textContent = "Anonymous": refs.nameInput.textContent = event.currentTarget.value;
};


// ...........................................................................................................


// function onIntputChange(event) {
//         console.log(event.currentTarget.value);
//     if (refs.nameInput.textContent = "") {
//         refs.nameInput.textContent = "Anonymous";
//     }
//     return refs.nameInput.textContent = event.currentTarget.value;
// }
    

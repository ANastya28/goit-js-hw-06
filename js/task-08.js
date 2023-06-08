const form = document.querySelector(`.login-form`)
let keypress = 1;
// console.log(form)

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    // console.log(formElements);
    
    const mail = formElements.email.value;
    const password = formElements.password.value;

    // console.log(mail, password);
    
    const formData = {
        mail,
        password,
    };
   
    console.log(formData);
}

form.addEventListener(`click`, reset);

function reset() {
  form.value = "";
}


// ........................................................................................................

// 1@mail.com



// const form = document.querySelector(`.login-form`)
// console.log(form)

// form.addEventListener(`submit`, onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
 
//     const formData = new FormData(event.currentTarget);
   
//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log(value);
//         console.log(name);
//     });
// }


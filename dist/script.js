//Show errors when submitting.
const form = document.querySelector(".form__form");
const inputs = document.querySelectorAll(".form__form__inputfield");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-pw");
const confirmError = document.querySelector("#nomatch-error");

const checkbox = document.querySelector("#checkbox");
const checkboxCopy = document.querySelector(".checkbox-copy");
const checkboxError = document.querySelector(".error-check");
const checkboxLabel = document.querySelector("#checkbox-box");

form.addEventListener("submit", event => {
    event.preventDefault();
    inputs.forEach(input => {
        //Show error when passwords do not match.
        if(password.value != confirmPassword.value && confirmPassword.value != ""){
            confirmError.classList.add("show-error");
        } else{
            confirmError.classList.remove("show-error")
        }
        //Show error when input is empty.
        if(input.value === ""){
            input.nextElementSibling.classList.add("show-error");
        } else {
            input.nextElementSibling.classList.remove("show-error");
        }
        //Show error when checkbox is unchecked.
        if(!checkbox.checked){
            checkboxError.classList.add("show-error");
            checkboxCopy.classList.add("hide-copy");
        } 
    })    
})

//Remove error when checkbox is clicked.
checkboxLabel.addEventListener("click", () => {
    checkboxError.classList.remove("show-error");
    checkboxCopy.classList.remove("hide-copy");
})

//Remove errors when typing.
inputs.forEach(input => {
    input.addEventListener("keydown", () => {
        input.nextElementSibling.classList.remove("show-error");
    })
})

//Increase counter when filling out form

const counter = document.querySelector(".progress__status-data")

inputs.forEach(input => {
    input.addEventListener("focusout", () => {
        let completed = [];
        inputs.forEach(input => {
            if(input.value != ""){
                completed.push(input);
            }
        })
        counter.textContent = completed.length/4 * 100;
    })
})



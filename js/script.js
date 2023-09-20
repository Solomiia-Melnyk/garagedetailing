

//validation form
function validateForm() {

   let nameInput = document.forms["form"]["user_name"]
   let emailInput = document.forms["form"]["user_email"]
   let comentInput = document.forms["form"]["coment"]
   let isValid = true

if (nameInput.value === "") {
   isValid = false;
   showError(nameInput, "Wpisz imię.");
} else {
   hideError(nameInput);
}

if (comentInput.value === "") {
   isValid = false;
   showError(comentInput, "Wpisz co interesuje.");
} else {
   hideError(comentInput);
}   
   
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailInput.value)) {
   isValid = false;
   showError(emailInput, "Wpisz poprawny email.");
} else {
   hideError(emailInput);
}

return isValid; }

    function showError(inputElement, message) {
        inputElement.classList.add("error");
        var errorTextElement = inputElement.nextElementSibling;
        errorTextElement.textContent = message;
    }

    function hideError(inputElement) {
        inputElement.classList.remove("error");
        var errorTextElement = inputElement.nextElementSibling;
        errorTextElement.textContent = "";
    }



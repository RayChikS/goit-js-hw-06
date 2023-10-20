const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const enteredText = validationInput.value;
  
  if (enteredText.length === 6) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }	
});

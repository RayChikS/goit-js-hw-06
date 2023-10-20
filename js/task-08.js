const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const emailField = form.elements.email;
	const passwordField = form.elements.password;

	if (!emailField.value || !passwordField.value) {
    alert("Будь ласка, заповніть всі обов'язкові поля.");
  }else {
  const formData = {
    email: emailField.value,
    password: passwordField.value,
  };

  console.log(formData);

  form.reset();
}
});

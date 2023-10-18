const counter = document.querySelector('#value');
const decrement = document.querySelector('#counter button[data-action="decrement"]')
const increment = document.querySelector('#counter button[data-action="increment"]')

let counterValue = 0;

decrement.addEventListener("click", () => {
	counterValue -= 1;
	counter.textContent = counterValue;
});
increment.addEventListener("click", () => {
	counterValue += 1;
	counter.textContent = counterValue;
});
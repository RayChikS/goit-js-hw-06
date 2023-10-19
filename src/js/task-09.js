function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector('.change-color');
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");


buttonChange.addEventListener("click", () => {
	const randomColor = getRandomHexColor();
	body.style.backgroundColor = randomColor;
	colorSpan.textContent = randomColor;
})
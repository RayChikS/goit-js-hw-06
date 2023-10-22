const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.value = 24; 
text.style.fontSize = sizeControl.value + "px";


sizeControl.addEventListener('input', () => {
	const fontSize = sizeControl.value + "px";
  text.style.fontSize = fontSize;
});
const colorOutput = document.querySelector('.color');
const colorInput = document.querySelector('.change-color');

colorInput.addEventListener('click', onTargetBtn);

function onTargetBtn() {
	const randomColors = getRandomHexColor();
	document.body.style.backgroundColor = randomColors;
	colorOutput.textContent = randomColors;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

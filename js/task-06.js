const inputEl = document.querySelector('#validation-input');

const totalLength = document.querySelector('[data-length="6"]');
// using standard method:
// const totalLength = inputEl.getAttribute('data-length');
const initialTotalLength = totalLength.dataset.length;
// we can also use a parseInt function as well to get length from an attribute:
// const initialTotalLength = parseInt(totalLength, 10);
inputEl.addEventListener('blur', event => {
	const text = event.target.value;

	if (text.length < initialTotalLength || text.length > initialTotalLength) {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	} else {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	}
});

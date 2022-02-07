const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
	event.preventDefault();
	if (
		form.children[0].firstElementChild.value === '' ||
		form.children[1].firstElementChild.value === ''
	) {
		alert('no empty fields allowed');
		return;
	}
	const formData = new FormData(event.currentTarget);

	formData.forEach((value, name) => {
		console.log('name:', name);
		console.log('value:', value);
	});

	form.reset();
});

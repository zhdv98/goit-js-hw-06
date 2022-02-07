const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
	const ingredientsItem = document.createElement('li');
	ingredientsItem.textContent = ingredient;
	ingredientsItem.classList = 'item';
	return ingredientsItem;
});
ingredientsList.append(...elements);

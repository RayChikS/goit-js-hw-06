const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
	
const ingredientItems = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.className = "item";
  return li;
});

ingredientList.append(...ingredientItems);
const categoriesItemsEl = document.querySelector('li.item');

console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((el) => {
	console.log(`Category: ${el.firstElementChild.textContent}\n Elements: ${el.lastElementChild.length}`);
});
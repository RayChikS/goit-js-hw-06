const allCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${allCategories.length}`);


allCategories.forEach(category => {
	const categoryTitle = category.firstElementChild('h2').textContent;
  const categoryItems = category.lastElementChild('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
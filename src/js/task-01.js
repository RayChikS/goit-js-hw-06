const allCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${allCategories.length}`);


allCategories.forEach(category => {
	const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
const categories = document.querySelector("#categories");

console.log(`Number of categories:${categories.children.length}`);

[...categories.children].forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
});

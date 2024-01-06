const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const markup = [];

ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.className = "item";
  li.textContent = ingredient;
  markup.push(li);
  return li;
});

ingredientsList.append(...markup);

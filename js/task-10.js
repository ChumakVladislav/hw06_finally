function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

let minWidth = 30;
let minHeight = 30;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", restoreFoo);

function createBoxes() {
  const amount = Number(input.value);

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();

    div.style.width = `${minWidth}px`;

    div.style.height = `${minHeight}px`;
    console.log(div);

    minWidth += 10;
    minHeight += 10;

    boxes.append(div);
  }
}

function restoreFoo() {
  boxes.innerHTML = "";
}

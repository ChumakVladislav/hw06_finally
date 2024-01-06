const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", inputChange);

function inputChange(evt) {
  span.style.fontSize = `${Number(evt.currentTarget.value)}px`;
}

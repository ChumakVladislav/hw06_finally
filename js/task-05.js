const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", nameInput);

function nameInput(evt) {
  output.textContent = evt.currentTarget.value;

  if (evt.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
}

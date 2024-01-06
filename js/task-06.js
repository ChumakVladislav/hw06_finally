const input = document.querySelector("#validation-input");

input.addEventListener("blur", blurChange);

function blurChange(evt) {
  if (Number(input.dataset.length) === evt.currentTarget.value.length) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
      input.classList.add("valid");
      return;
    }

    input.classList.add("valid");
    return;
  }
  if (input.classList.contains("valid")) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return;
  }
  input.classList.add("invalid");
}

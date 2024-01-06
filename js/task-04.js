const decrement = document.querySelector("button[data-action=decrement]");
const increment = document.querySelector("button[data-action=increment]");
const value = document.querySelector("#value");

let counterValue = 0;
value.textContent = counterValue;

decrement.addEventListener("click", decrementVal);
increment.addEventListener("click", incrementVal);

function decrementVal() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function incrementVal() {
  counterValue += 1;
  value.textContent = counterValue;
}

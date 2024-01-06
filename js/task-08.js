const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSuccess);

function onFormSuccess(evt) {
  evt.preventDefault();

  const inputs = evt.currentTarget.elements;

  if (inputs.email.value === "" || inputs.password.value === "") {
    window.alert("Заповни все!");
    return;
  }

  const values = {};

  values.email = inputs.email.value;
  values.password = inputs.password.value;

  console.log(values);
  form.reset();
}

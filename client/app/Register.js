let Form = document.getElementById("form");
let nameInput = document.querySelector(".name__input");
let emailInput = document.querySelector(".email__input");
let passwordInput = document.querySelector(".password__input");

function eventListeners() {
  Form.addEventListener("submit", formValidationController);
}

eventListeners();

function formValidationController(e) {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const nameValue = nameInput.value.trim();



  fetch("http://localhost:5000/user/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location.href =
        "http://127.0.0.1:5500/client/view/Auth/Login.html";
    })
    .catch((error) => console.error(error));
  e.preventDefault();
}

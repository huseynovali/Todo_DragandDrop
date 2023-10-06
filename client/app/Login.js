let Form = document.getElementById("form");
let emailInput = document.querySelector(".email__input");
let passwordInput = document.querySelector(".password__input");

function eventListeners() {
  Form.addEventListener("submit", formValidationController);
}

eventListeners();

function formValidationController(e) {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  console.log({});

  fetch("http://localhost:5000/user/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("username", JSON.stringify(res.user.name));
      localStorage.setItem("userId", JSON.stringify(res.user._id));
      localStorage.setItem("token", JSON.stringify(res.user.token));
      window.location.href ='http://127.0.0.1:5500/client/view/Todo/Todo.html'
    })
    .catch((error) => console.error(error));
  e.preventDefault();
}

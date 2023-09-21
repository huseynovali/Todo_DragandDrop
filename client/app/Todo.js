let button = document.querySelector(".create__button");
let create__btn = document.querySelector(".btn__create");
let todo__form__container = document.querySelector(".create__form");

function eventListener() {
  button.addEventListener("click", addToogle);
}

function addToogle() {
  console.log(create__btn.classList.value);
  if (create__btn.classList.value.includes("rotate-45")) {
    create__btn.classList.remove("rotate-45");

    todo__form__container.classList.remove("d-block");
  } else {
    create__btn.classList.add("rotate-45");
    todo__form__container.classList.add("d-block");
  }
}

eventListener();

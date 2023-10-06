let button = document.querySelector(".create__button");
let create__btn = document.querySelector(".btn__create");
let todo__form__container = document.querySelector(".create__form");
let todo__list = document.querySelector(".todo__list");
let checked__btn = document.querySelector(".checkbox__input");
let formin = document.querySelector(".form");
let titleInput = document.querySelector(".title__input");
let textareaInput = document.querySelector(".textarea__input");
const userId = JSON.parse(localStorage.getItem("userId"));
let arr = [
  {
    title: "ALI",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui Perferendis autem voluptatibus nobis ab tempore consectetur at \
      ex molestias excepturi quo! Architecto vero maxime, quae \
       repudiandae saepe dolorem hic animi qui",
    complated: false,
    uploadDate: "15.10.2023",
  },
  {
    title: "Namiq",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui",
    complated: true,
    dauploadDatete: "17.10.2023",
  },
  {
    title: "Namiq",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui",
    complated: true,
    uploadDate: "17.10.2023",
  },
  {
    title: "Namiq",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui",
    complated: true,
    uploadDate: "17.10.2023",
  },
];

function eventListener() {
  button.addEventListener("click", addToogle);
  document.addEventListener("DOMContentLoaded", dataList);
  formin.addEventListener("submit", formValidationController);
}
eventListener();

function dataList() {
  fetch("http://localhost:5000/todo/get/" + userId)
    .then((res) => res.json())
    .then((res) => {
      arr = [...res];
      listItem();
    });
}

function listItem() {
  todo__list.innerHTML = "";
  if (arr.length > 0) {
    arr.forEach((item, index) => {
      const listItemElement = document.createElement("li");
      listItemElement.classList.add("list__item");

      const titleElement = document.createElement("h1");
      titleElement.textContent = item.title;
      listItemElement.appendChild(titleElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = item.description;
      if (item.complated) {
        descriptionElement.style.textDecoration = "line-through";
      }
      listItemElement.appendChild(descriptionElement);

      const listBottomElement = document.createElement("div");
      listBottomElement.classList.add("list__item__bottom");
      const dateElement = document.createElement("span");
      dateElement.textContent = new Date(item.uploadDate).toLocaleDateString();
      listBottomElement.appendChild(dateElement);

      const listBottomInputGroup = document.createElement("div");

      const buttonElement = document.createElement("button");
      buttonElement.textContent = "Delete";
      buttonElement.classList.add("btn__delete");

      buttonElement.addEventListener("click", () => {
        deleteTodo(item._id);
      });
      listBottomInputGroup.appendChild(buttonElement);

      const checkboxElement = document.createElement("input");
      checkboxElement.type = "checkbox";
      checkboxElement.checked = item.complated;
      checkboxElement.className = "";
      checkboxElement.addEventListener("change", () => {
        clickCheckbox(index, item._id);
      });
      listBottomInputGroup.appendChild(checkboxElement);
      listBottomInputGroup.classList.add("bottom__inputGroup");
      listBottomElement.appendChild(listBottomInputGroup);
      listItemElement.appendChild(listBottomElement);
      todo__list.appendChild(listItemElement);
    });
  } else {
    const emptyText = document.createElement("h1");
    emptyText.textContent = "Not Todo !";
    todo__list.appendChild(emptyText);
  }
}

function addToogle() {
  if (create__btn.classList.value.includes("rotate-45")) {
    create__btn.classList.remove("rotate-45");
    todo__form__container.classList.remove("d-block");
  } else {
    create__btn.classList.add("rotate-45");
    todo__form__container.classList.add("d-block");
  }
}

function formValidationController(e) {
  let TaskInput = titleInput.value.trim();
  let Category = textareaInput.value;

  if (TaskInput == "") {
    alert("Pls Insert Input !");
  } else {
    fetch("http://localhost:5000/todo/create/" + userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: TaskInput,
        description: Category,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        todo__form__container.classList.remove("d-block");
        window.location.reload();
      })
      .catch((error) => console.error(error));
  }

  e.preventDefault();
}

function clickCheckbox(index, itemId) {
  arr[index].complated = !arr[index].complated;
  listItem();
  fetch("http://localhost:5000/todo/update/" + itemId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newCompletedValue: arr[index].complated }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
}
function deleteTodo(paramsId) {
  arr = arr.filter((item) => item._id !== paramsId);
  listItem();

  fetch("http://localhost:5000/todo/delete/" + paramsId, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
}

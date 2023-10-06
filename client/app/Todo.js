let button = document.querySelector(".create__button");
let create__btn = document.querySelector(".btn__create");
let todo__form__container = document.querySelector(".create__form");
let todo__list = document.querySelector(".todo__list");
let checked__btn = document.querySelector(".checkbox__input");
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
  //checked__btn.addEventListener("click",  () => console.log("salam"));
  document.addEventListener("DOMContentLoaded", dataList);
}
eventListener();

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

function dataList() {
  fetch("http://localhost:5000/todo/get/651f2f34f429d438f0e5007c")
    .then((res) => res.json())
    .then((res) => {
      arr = [...res];
      listItem();
    });
}

const listItem = () => {
  todo__list.innerHTML = ""; // Liste öğesini temizle
  arr.forEach((item, index) => {
    const listItemElement = document.createElement("li");
    listItemElement.classList.add("list__item");

    const titleElement = document.createElement("p");
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

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Delete";
    buttonElement.classList.add("btn__delete");
    listBottomElement.appendChild(buttonElement);

    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.checked = item.complated;
    checkboxElement.addEventListener("change", () => {
      clickCheckbox(index, item._id);
    });
    listBottomElement.appendChild(checkboxElement);

    listItemElement.appendChild(listBottomElement);
    todo__list.appendChild(listItemElement);
  });
};

const clickCheckbox = (index, itemId) => {
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
};

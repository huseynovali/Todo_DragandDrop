let button = document.querySelector(".create__button");
let create__btn = document.querySelector(".btn__create");
let todo__form__container = document.querySelector(".create__form");
let todo__list = document.querySelector(".todo__list");

const arr = [
  {
    title: "ALI",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui Perferendis autem voluptatibus nobis ab tempore consectetur at \
      ex molestias excepturi quo! Architecto vero maxime, quae \
       repudiandae saepe dolorem hic animi qui",
      complated: false,
    date: "15.10.2023",
  },
  {
    title: "Namiq",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui",
    complated: true,
    date: "17.10.2023",
  },
  {
    title: "Namiq",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui",
    complated: true,
    date: "17.10.2023",
  },
  {
    title: "Namiq",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  \
    Perferendis autem voluptatibus nobis ab tempore consectetur at \
     ex molestias excepturi quo! Architecto vero maxime, quae \
      repudiandae saepe dolorem hic animi qui",
    complated: true,
    date: "17.10.2023",
  },
];

function eventListener() {
  button.addEventListener("click", addToogle);
  document.addEventListener("DOMContentLoaded", dataList);
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

function dataList() {
  arr.forEach((item) => {
    todo__list.innerHTML += `
    <li class='list__item'>
    <p>${item.title}</p>
    <p style="${item.complated ? "text-decoration: line-through;" : ""}">${item.text}</p>
    <div class="list__item__bottom">
    <span>${item.date}</span>
    <div >
    
    <button class='btn__delete'>Delete</button>
    <input type="checkbox"  ${item.complated ? "checked" : ""} />
    
    </div>
   </div>
    </li>
    `;
  });
}

eventListener();

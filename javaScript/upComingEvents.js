import { data } from "./data.js";

const currentDate = data.fechaActual;
const events = data.eventos;
const upComingEvents = events.filter((item) => item.date >= currentDate);

function renderEmpty(id) {
  const container = document.getElementById(id);

  container.innerHTML = `<div class="alert alert-danger" role="alert" style="display:flex; justify-content:center; padding:20px; margin:5px 20px 0px 20px font-family: 'Secular One', sans-serif;" >
  <img  src="../images/logo-warning-message.png" alt="">
  THE ENTERED TITLE DOES NOT HAVE CHARACTERISTICS TO DISPLAY, ENTER ANOTHER TEXT FIELD</div>`;
}

function filterCards() {
  const textValue = document.getElementById("textsearch").value.toLowerCase();
  const checkBoxes = [
    ...document.querySelectorAll("input[type=checkbox]:checked"),
  ].map((checkbox) => checkbox.value.toLowerCase());

  const filteredEvents = upComingEvents.filter((item) => {
    
    return (
      item.name.toLowerCase().includes(textValue) &&
      (checkBoxes.length === 0 ||
        checkBoxes.includes(item.category.toLowerCase()))
    );
  });

  if (filteredEvents.length > 0) {
    renderCards("upcomingCardsSection", filteredEvents);
  } else {
    renderEmpty("upcomingCardsSection");
  }
}

function renderCards(idDiv, data) {
  document.getElementById(idDiv).innerHTML = "";
  data.forEach((item) => {
    let card = createCard(item);
    document.getElementById(idDiv).appendChild(card);
  });
}


function createCard({ id, image, name, price, description }) {
  let card = document.createElement("div");
  card.id = id;
  card.className = "swiper-slide ";
  card.style = "width: 18rem;";

  card.innerHTML = `
                        <img class="card-img-top" src="${image}" alt="${name} image">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>
                            <div class='d-flex justify-content-evenly align-items-center full'>
                                <h2>${price}</h2>
                                <a href="../pages/details.html?id=${id}" class="btn btn-outline-info btn-sm">Ver más</a>
                            </div>
                        </div>
                    `;
  return card;
}



/* assign the filteredEvents function to each checkbox */
document
  .querySelectorAll("input[type=checkbox]")
  .forEach((check) => check.addEventListener("click", filterCards));

/* asignar la funcion filteredEvents al boton buscar */
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  filterCards();
});



renderCards("upcomingCardsSection", upComingEvents);



let swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

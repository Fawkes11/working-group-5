const url = `https://pro-talento.up.railway.app/api/amazing/`;

let currentDate = "";
let events = [];

async function fecthApi() {
  try {
    let response = await fetch(url);
    let data = await response.json();

    currentDate = data.date;
    events = data.response.filter((item) => item.date >= currentDate);
    
    createCheckBoxes(events);
    renderCards("upcomingCardsSection", events);
    
  } catch (err) {
    console.log(err);
  }
}

fecthApi();

async function filterData() {
  try {
    const textValue = document.getElementById("textsearch").value.toLowerCase();
    const checkBoxes = [
      ...document.querySelectorAll("input[type=checkbox]:checked"),
    ].map((checkbox) => checkbox.value.toLowerCase());

    const url = `https://pro-talento.up.railway.app/api/amazing/?name=${textValue}&category=${checkBoxes.join(
      ","
    )}`;
    let response = await fetch(url);
    let data = await response.json();

    events = data.response.filter((item) => item.date >= currentDate);

    if (events.length > 0) {
      renderCards("upcomingCardsSection", events);
    } else {
      renderEmpty("upcomingCardsSection");
    }
  } catch (err) {
    console.log(err);
  }
}

function renderEmpty(id) {
  const container = document.getElementById(id);

  container.innerHTML = `<div class="alert alert-danger" role="alert" style="display:flex; justify-content:center; padding:20px; margin:5px 20px 0px 20px font-family: 'Secular One', sans-serif;" >
  <img  src="../images/logo-warning-message.png" alt="">
  THE ENTERED TITLE DOES NOT HAVE CHARACTERISTICS TO DISPLAY, ENTER ANOTHER TEXT FIELD</div>`;
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
                            <h5 class="card-title" style="display: flex; justify-content: center; text-transform: uppercase;">${name}</h5>
                            <p class="card-text" style=" font-family: Raleway;" >${description}</p>
                            <div class="card-link d-flex justify-content-evenly align-items-center">
                                <h2>${price}</h2>
                                <a href="../pages/details.html?id=${id}" style=" font-family: 'Lobster', cursive;">Ver más</a>
                            </div>
                        </div>   
                       
                    `;
  return card;
}




function createCheckBoxes(events) {
  /* Node of the checkbox container is called */
  const checkboxContainer = document.getElementById("checkboxContainer");

  /* A SET is used to filter the single categories and convert them into an array. */
  const categories = [...new Set(events.map((e) => e.category))];

  /* An array of objects is created to improve checkbox creation */
  let categoriesLabels = categories.map((category) => {
    return { id: category.toLowerCase().replaceAll(" ", ""), label: category };
  });

  /* The array is traversed to create the checkboxes */
  categoriesLabels.forEach((category) => {
    /* The checkbox is created and the necessary attributes are added for its representation */
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", category.id);
    checkbox.setAttribute("value", category.id);
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("click", filterData);

    /* The label is created and the necessary attributes are added for its representation */
    const label = document.createElement("label");
    label.setAttribute("for", category.id);
    label.textContent = category.label;
    label.classList.add("ms-1");

    /* a div is created to add the checkbox and its label */
    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(label);

    /* the div is added to the checkbox container that was called at the start of the function  */
    checkboxContainer.appendChild(div);
  });
}

/* asignar la funcion filteredEvents al boton buscar */
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  filterData();
});


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

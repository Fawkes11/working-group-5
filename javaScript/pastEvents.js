let url = `https://pro-talento.up.railway.app/api/amazing/`;

let date = '';
let arrayPast = [];

async function fecthApi() {
  try {
    let response = await fetch(url);
    response = await response.json();
    console.log(response.date);
    // console.log(response.response);
    date = response.date;
    arrayPast = response.response.filter((item) => item.date <= date);

    console.log(arrayPast);
    createCheckBoxes(arrayPast)
    cardFilter(arrayPast)
    document.getElementById('buttonSearch').addEventListener('click', filterData)
    document.querySelectorAll('.class_checks').forEach((each) => each.addEventListener('click', filterData))



  } catch (error) {
    console.error(error);
  }
}
fecthApi()

async function filterData() {
  try {
    let texto = document.getElementById('searchText').value.toLowerCase();
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value);
    console.log(checks);
    let url = `https://pro-talento.up.railway.app/api/amazing/?name=${texto}&category=${checks.join(',')}`;
    let response = await fetch(url);
    response = await response.json();
    // console.log(response.response);
    if (response.response.length == 0) {
      printEmptyPast()
    } else {
      cardFilter(response.response)
    }
  } catch (error) {
    console.error(error)
  }

}

function createLetters(id, objetoData) {

  let div = document.createElement('div');
  div.id = id;
  div.className = 'swiper-slide'

  div.innerHTML = ` 
      <img  src="${objetoData.image}" alt="">
      <div class="card-description">
          <div class="card-title">
              <h4  style="display: flex; justify-content: center; text-transform: uppercase;" >${objetoData.name}</h4>
          </div>
          <div class="card-text">

              <p style=" font-family: Raleway;">${objetoData.description}</p>

          </div>
          <div class="card-link d-flex justify-content-evenly align-items-center ">
          <h2>${objetoData.price}</h2>
              <a href="../pages/details.html?id=${objetoData.id}" style=" font-family: 'Lobster', cursive;">Ver más</a>
          </div>
      </div>  
`
  return div
}

/*----- filter text search--------*/
const searchButton = document.getElementById('buttonSearch');
const searchInput = document.getElementById('searchText')

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(searchInput.value);
  filterByText(arrayPastEvents)
})

/*----------------- filter by text and category too, if one  category check the search only filter this category ----------- */
function filterByText(arrayPastEvents) {
  const text = searchInput.value.toLowerCase();

  //Filtrar eventos por categoría seleccionada
  let filteredEvents = arrayPastEvents;
  if (selectedCategories.length > 0) {
    filteredEvents = filteredEvents.filter(event => {
      return selectedCategories.some(category => event.category.toLowerCase().includes(category.toLowerCase()));
    });
  }

  // Filtrar eventos por texto
  filteredEvents = filteredEvents.filter(event => event.name.toLowerCase().includes(text));

  console.log(filteredEvents);
  cardFilter(filteredEvents);

}

function printEmptyPast() {
  const messageCard = document.getElementById('section');
  messageCard.innerHTML = `
    <div class="alert alert-danger" role="alert" style="display:flex; justify-content:center; padding:20px; margin:5px 20px 0px 20px font-family: 'Secular One', sans-serif;" >
    <img  src="../images/logo-warning-message.png" alt="">
    THE ENTERED TITLE DOES NOT HAVE CHARACTERISTICS TO DISPLAY, ENTER ANOTHER TEXT FIELD</div>`;
  return;
}

/*----function card filter view search------*/
function cardFilter(arrayPastEvents) {
  const section = document.getElementById('section');
  section.innerHTML = '';

  for (let i = 0; i < arrayPastEvents.length; i++) {
    let id = `card${i + 1}`
    let div = createLetters(id, arrayPastEvents[i]);
    document.getElementById('section').appendChild(div)
  }
}

function createCheckBoxes(arrayPastEvents) {
  /*---- category checkbox view ------ */
  const containerCategory = document.getElementById('cateogry');
  let categories = [... new Set(arrayPastEvents.map(evento => evento.category))]
  // console.log(categories)
  let category = categories.map(category => { return { id: category.toLowerCase().replaceAll(" ", ""), label: category } })


  /*------view checkbox in html ---------*/
  category.forEach(category => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', category.id);
    checkbox.setAttribute('value', category.label);

    checkbox.classList.add("class_checks")


    /*------view card check checkbox------*/
    checkbox.addEventListener('click',filterData)
    // console.log(checkbox);

    const label = document.createElement('label');
    label.setAttribute('for', category.id);
    label.textContent = category.label;

    const div = document.createElement('div');

    div.appendChild(checkbox);
    div.appendChild(label);
    containerCategory.appendChild(div);
  })
}

/*-------------- cards swiper carousel ------------------------*/ 

let swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


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
  }
});

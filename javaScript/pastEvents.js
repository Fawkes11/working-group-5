import { data } from './data.js'

const fechaActual = data.fechaActual
let arrayPastEvents = [];

for (let i = 0; i < data.eventos.length; i++) {

  if (data.eventos[i].date <= fechaActual) {
    arrayPastEvents.push(data.eventos[i]);
  } else {
    // console.log('la fecha es mayor a la fecha actual de registro');
  }

}
// console.log(arrayPastEvents);

for (let i = 0; i < arrayPastEvents.length; i++) {

  let id = `card${i + 1}`
  let div = createLetters(id, arrayPastEvents[i]);
  document.getElementById('section').appendChild(div)

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

  const messageCard = document.getElementById('section');

  if (filteredEvents.length === 0) {
    messageCard.innerHTML = `
    
    <div class="alert alert-danger" role="alert" style="display:flex; justify-content:center; padding:20px; margin:5px 20px 0px 20px font-family: 'Secular One', sans-serif;" >
    <img  src="../images/logo-warning-message.png" alt="">
    THE ENTERED TITLE DOES NOT HAVE CHARACTERISTICS TO DISPLAY, ENTER ANOTHER TEXT FIELD</div>`;
    return;
  }

  // messageCard.innerHTML = '';
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

/*-----view filter card caterogy checkbox---------*/
function filterCategory(category) {
  if (document.getElementById(category).checked) {
    viewCategoryByFilter(arrayPastEvents, category);
  } else {
    removeCategory(category);
    viewCategoryByFilter(arrayPastEvents, '');
  }
}



function removeCategory(category) {
  selectedCategories = selectedCategories.filter(selectedCategory => selectedCategory !== category.toLowerCase());
}

/*---- category checkbox view ------ */
const containerCategory = document.getElementById('cateogry');
const category = [
  { id: 'food ', label: 'Food Fair' },
  { id: 'museum', label: 'Museum' },
  { id: 'costume', label: 'Costume Party' },
  { id: 'music', label: 'Music Concert' },
  { id: 'race', label: 'Race' },
  { id: 'book', label: 'Book Exchange' },
  { id: 'cinema', label: 'Cinema' },
];

/*------view checkbox in html ---------*/
category.forEach(category => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', category.id);


  /*------view card check checkbox------*/
  checkbox.onchange = () => {
    filterCategory(category.id);
  }

  const label = document.createElement('label');
  label.setAttribute('for', category.id);
  label.textContent = category.label;

  const div = document.createElement('div');

  div.appendChild(checkbox);
  div.appendChild(label);
  containerCategory.appendChild(div);
})

/*-- cycle checkbox call ids ----*/

category.forEach(category => {
  const checkbox = document.getElementById(category.id);
  checkbox.addEventListener('click', () => {
    filterCategory(category.id);
  })
})


/* -------funtion category filter------- */

let selectedCategories = [];

function viewCategoryByFilter(arrayPastEvents, category) {
  const containerCategory = document.getElementById('section');
  containerCategory.innerHTML = '';
  // Verificamos si la categoría ya está en el array de categorías seleccionadas
  if (!selectedCategories.includes(category) && category !== '') {
    selectedCategories.push(category);
  }

  let filteredEvents = arrayPastEvents; 

  if (selectedCategories.length > 0) {
    filteredEvents = arrayPastEvents.filter(event => {
      return selectedCategories.some(category => event.category.toLowerCase().includes(category.toLowerCase()));
    });
  }

  console.log(selectedCategories); 

  for (let i = 0; i < filteredEvents.length; i++) {
    let id = `card${i + 1}`;
    let div = createLetters(id, filteredEvents[i]);
    document.getElementById('section').appendChild(div);
  }
}



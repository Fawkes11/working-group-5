
import { data } from './data.js'

/* ---------- Array principal ---------- */

let arrayEventos = [];

for (let i = 0; i < data.eventos.length; i++) {

  arrayEventos.push(data.eventos[i]);

}
// console.log(arrayEventos);

/* ---------- Creación de CARDS ---------- */

/* FUNCTION: Retorna UN div para cada evento
 * Recibe un id que será el identificador del evento
 * y un objeto que corresponde al evento */
function createEventCard(id, objetoEvento) {

  let div = document.createElement('div');
  div.id = id;
  div.className = 'swiper-slide'

  div.innerHTML = `
      <img src="${objetoEvento.image}" alt="...">
      <div class="card-description">
          <div class="card-title">
              <h4  style="display: flex; justify-content: center; text-transform: uppercase;" >${objetoEvento.name}</h4>
          </div>
          <div class="card-text">
              <p style=" font-family: Raleway;" >${objetoEvento.description}</p>
          </div>
          <div class="card-link d-flex justify-content-evenly align-items-center">
          <h2>${objetoEvento.price}</h2>
              <a href="./pages/details.html?id=${objetoEvento.id}" style=" font-family: 'Lobster', cursive;" >Ver más</a>
          </div>
      </div>
`
  return div
}

/* FUNCTION: Pinta las cards según el arreglo de eventos
 * que ingrese por parámetro */
function printCards(array) {
  const containerCategory = document.getElementById('section');
  containerCategory.innerHTML = '';

  for (let i = 0; i < array.length; i++) {

    let id = `card${i+1}`
    let div = createEventCard(id, array[i]);
    document.getElementById('section').appendChild(div)

  }
}

printCards(arrayEventos)

/* ---------- Creación de Checkboxes ---------- */

let categories = [... new Set(arrayEventos.map(evento => evento.category))]
// console.log(categories)
let categories_check = categories.map(category => {return {id: category.toLowerCase().replaceAll(" ", ""), label: category }})
// console.log(categories_check)
const containerCategories = document.getElementById('category');

categories_check.forEach(category => {
  // create input type check
  const input_check = document.createElement('input');
  input_check.setAttribute('type', 'checkbox');
  input_check.setAttribute('id', category.id);
  input_check.setAttribute('value', category.label);
  input_check.classList.add("class_checks")
  // create label
  const label = document.createElement('label');
  label.setAttribute('for', category.id);
  label.textContent = category.label;
  // create div
  const div = document.createElement('div');
  div.appendChild(input_check);
  div.appendChild(label);
  containerCategories.appendChild(div);
})

/* ---------- Filtro de Checkboxes y de Input Text  ---------- */

/* FUNCTION: Pinta mensaje de eventos vacíos */
function printEmpty() {
  const containerCards = document.getElementById('section');
  containerCards.innerHTML = '';

  containerCards.innerHTML = `
    <div class="alert alert-danger" role="alert" style="display:flex; justify-content:center; padding:20px; margin:5px 20px 0px 20px font-family: 'Secular One', sans-serif;" >
    <img  src="./images/logo-warning-message.png" alt="">
    THE ENTERED TITLE DOES NOT HAVE CHARACTERISTICS TO DISPLAY, ENTER ANOTHER TEXT FIELD</div>`;
}

/* FUNCTION: filtra los eventos según checks e input */
function filters() {
  let texto = document.getElementById('searchInTitle').value.toLowerCase();
  // console.log(texto);
  let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value);
  // console.log(checks);
  let filtro = arrayEventos.filter(evento => {
    return (evento.name.toLowerCase().includes(texto)) && (checks.length === 0 || checks.includes(evento.category))
  });
  console.log(filtro);
  if (filtro.length>0) {
    printCards(filtro);
  } else {
    printEmpty();
  }
}

/* Agrega filtro a checks */
categories_check.forEach(category => {
  const checkbox = document.getElementById(category.id);
  checkbox.addEventListener('click', () => {
    filters();
  })
})

/* Agrega filtro a input */
const searchButton = document.getElementById('buttonSearch');
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  filters();
})


/* ---------- Gestión de complemento para carousel ---------- */
let swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 10,

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

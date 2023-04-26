/* FUNCTION: fetch API */
async function fecthApi() {
  try {
    let url = `https://pro-talento.up.railway.app/api/amazing/`;
    let response = await fetch(url);
    response = await response.json();

    createCheckBoxes(response.response)
    printCards(response.response)

    document.getElementById('buttonSearch').addEventListener('click', (event) => {
      event.preventDefault();
      filterData()
    })
    document.querySelectorAll('.class_checks').forEach((each) =>each.addEventListener('click', filterData))

  } catch (error) {
    console.log(error)
  }
}

fecthApi()

/* FUNCTION: Filtro de eventos */
async function filterData() {
  try {
    let texto = document.getElementById('searchInTitle').value.toLowerCase();
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value);
    let url = `https://pro-talento.up.railway.app/api/amazing/?name=${texto}&category=${checks.join(',')}`;
    let response = await fetch(url);
    response = await response.json();
    if (response.response.length == 0) {
      printEmpty()
    } else {
      printCards(response.response)
    }
  } catch (error) {
    console.log(error)
  }
}

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

    let id = `card${i + 1}`
    let div = createEventCard(id, array[i]);
    document.getElementById('section').appendChild(div)

  }
}

/* FUNCTION: Creación de Checkboxes */
function createCheckBoxes(arrayEventos) {

  let categories = [... new Set(arrayEventos.map(evento => evento.category))]
  let categories_check = categories.map(category => { return { id: category.toLowerCase().replaceAll(" ", ""), label: category } })
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

}

/* FUNCTION: Pinta mensaje de eventos vacíos */
function printEmpty() {
  const containerCards = document.getElementById('section');
  containerCards.innerHTML = '';

  containerCards.innerHTML = `
    <div class="alert alert-danger" role="alert" style="display:flex; justify-content:center; padding:20px; margin:5px 20px 0px 20px font-family: 'Secular One', sans-serif;" >
    <img  src="./images/logo-warning-message.png" alt="">
    THE ENTERED TITLE DOES NOT HAVE CHARACTERISTICS TO DISPLAY, ENTER ANOTHER TEXT FIELD</div>`;
}

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

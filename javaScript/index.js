import { data } from './data.js'

/* ---------- Array principal ---------- */
let arrayEventos = [];

for (let i = 0; i < data.eventos.length; i++) {

  arrayEventos.push(data.eventos[i]);

}
console.log(arrayEventos);

/* ---------- Creación de CARDS ---------- */
for (let i = 0; i < arrayEventos.length; i++) {

  let id = `card${i+1}`
  let div = createEventCard(id, arrayEventos[i]);
  document.getElementById('section').appendChild(div)

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
              <h4>${objetoEvento.name}</h4>
          </div>
          <div class="card-text">
              <p>${objetoEvento.description}</p>
          </div>
          <div class="card-link d-flex justify-content-evenly align-items-center">
          <h2>${objetoEvento.price}</h2>
              <a href="./pages/details.html?id=${objetoEvento.id}">Ver más</a>
          </div>
      </div>
`
  return div
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

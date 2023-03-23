import { data } from './data.js'

let arrayHome = [];

for (let i = 0; i < data.eventos.length; i++) {

  arrayHome.push(data.eventos[i]);

}
console.log(arrayHome);

for (let i = 0; i < arrayHome.length; i++) {

  let id = `card${i+1}`
  let div = createLetters(id, arrayHome[i]);
  document.getElementById('section').appendChild(div)

}

function createLetters(id, objetoData) {

  let div = document.createElement('div');
  div.id = id;
  div.className = 'swiper-slide'  

  div.innerHTML = ` 
      <img src="${objetoData.image}" alt="...">
      <div class="card-description">
          <div class="card-title">
              <h4>${objetoData.name}</h4>
          </div>
          <div class="card-text">
              <p>${objetoData.description}</p>
          </div>
          <div class="card-link d-flex justify-content-evenly align-items-center">
          <h2>${objetoData.price}</h2>
              <a href="../pages/details.html?${objetoData.id}">Ver más</a>
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
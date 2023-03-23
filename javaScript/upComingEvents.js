import { data } from './data.js'

const currentDate = data.fechaActual;
const events = data.eventos;

const upComingEvents = events.filter((item) => item.date >= currentDate)

upComingEvents.forEach((item, index) => {
    let id = `card${index + 1}`
    let card = createCard(item);
    document.getElementById('upcomingCardsSection').appendChild(card)
})

function createCard({ id, image, name,price, description }) {
    
    let card = document.createElement('div');
    card.id = id;
    card.className = "swiper-slide "
    card.style = "width: 18rem;"

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
                    `
    return card
}


let swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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
    }
  });
  
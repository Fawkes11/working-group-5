import { data } from './data.js'

const currentDate = data.fechaActual;
const events = data.eventos;

const upComingEvents = events.filter((item) => item.date >= currentDate)

upComingEvents.forEach((item, index) => {
    let id = `card${index + 1}`
    let card = createCard(id, item);
    document.getElementById('upcomingCardsSection').appendChild(card)
})

function createCard(id, { image, name, description }) {
    console.log(id, name, image, description)
    let card = document.createElement('div');
    card.id = id;
    card.className = "card "
    card.style = "width: 18rem;"

    card.innerHTML = `
                        <img class="card-img-top" src="${image}" alt="${name} image">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>
                            <a href="../pages/details.html?${id}" class="btn btn-primary">Go somewhere</a>
                        </div>
                    `
    return card
}


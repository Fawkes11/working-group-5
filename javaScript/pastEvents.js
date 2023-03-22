
const data = {
  "fechaActual": "2022-01-01",
  "eventos": [
    {
      "image": "https://www.interpatagonia.com/paseos/fiesta-colectividades-bariloche/fiesta-colectividades-bariloche-1.jpg",
      "name": "Collectivities Party",
      "date": "2021-12-12",
      "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      "category": "Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance": 42756,
      "price": '$' + 5
    },
    {
      "image": "https://static01.nyt.com/images/2021/04/25/fashion/24NEWTRO-MINARI2/24NEWTRO-MINARI2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      "name": "Korean style",
      "date": "2021-08-12",
      "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
      "category": "Food Fair",
      "place": "Room A",
      "capacity": 45000,
      "assistance": 42756,
      "price": '$' + 10
    },
    {
      "image": "https://areajugones.sport.es/wp-content/uploads/2022/06/jurassic.png",
      "name": "Jurassic Park",
      "date": "2021-11-02",
      "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
      "category": "Museum",
      "place": "Field",
      "capacity": 82000,
      "assistance": 65892,
      "price": '$' + 15
    },
    {
      "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
      "name": "Parisian Museum",
      "date": "2022-11-02",
      "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
      "category": "Museum",
      "place": "Paris",
      "capacity": 8200,
      "estimate": 8200,
      "price": '$' + 3500
    },
    {
      "image": "https://assets.dicebreaker.com/marvel-multiverse-roleplaying-game-rpg-artwork-superheroes.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/marvel-multiverse-roleplaying-game-rpg-artwork-superheroes.jpg",
      "name": "Comicon",
      "date": "2021-02-12",
      "description": "For comic lovers, all your favourite characters gathered in one place.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 120000,
      "assistance": 110000,
      "price": '$' + 54
    },
    {
      "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
      "name": "Halloween Night",
      "date": "2022-02-12",
      "description": "Come with your scariest costume and win incredible prizes.",
      "category": "Costume Party",
      "place": "Room C",
      "capacity": 12000,
      "estimate": 9000,
      "price": '$' + 12
    },
    {
      "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
      "name": "Metallica in concert",
      "date": "2022-01-22",
      "description": "The only concert of the most emblematic band in the world.",
      "category": "Music Concert",
      "place": "Room A"
      , "capacity": 138000,
      "estimate": 138000,
      "price": '$' + 150
    },
    {
      "image": "https://audiocaptain.com/wp-content/uploads/2022/05/best-djs-in-the-world.jpg",
      "name": "Electronic Fest",
      "date": "2021-01-22",
      "description": "The best national and international DJs gathered in one place.",
      "category": "Music Concert",
      "place": "Room A",
      "capacity": 138000,
      "assistance": 110300,
      "price": '$' + 250
    },
    {
      "image": "https://blog.nasm.org/hubfs/Imported_Blog_Media/How-to-Make-Health-and-Fitness-a-Lifestyle.jpg",
      "name": "10K for life",
      "date": "2021-03-01",
      "description": "Come and exercise, improve your health and lifestyle.",
      "category": "Race",
      "place": "Campo de FutbÃ³l",
      "capacity": 30000,
      "assistance": 25698,
      "price": '$' + 3
    },
    {
      "image": "https://cdn.vox-cdn.com/thumbor/ffoYYWbp-lwEKTJhiV_va--wptM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22989972/GettyImages_1334895267.jpg",
      "name": "15K NY",
      "date": "2021-03-01",
      "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      "category": "Race",
      "place": "New York",
      "capacity": 3000000,
      "assistance": 2569800,
      "price": '$' + 3
    },
    {
      "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
      "name": "School's book fair",
      "date": "2022-10-15",
      "description": "Bring your unused school book and take the one you need.",
      "category": "Book Exchange",
      "place": "Room D1",
      "capacity": 150000,
      "estimate": 123286,
      "price": '$' + 1
    },
    {
      "image": "https://cdn.vox-cdn.com/thumbor/yDoXAgA_ZOEJTtS5ldOc0fS01J0=/0x144:2000x1191/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24488769/Eater_Cookbook2023_Final1.jpg",
      "name": "Just for your kitchen",
      "date": "2021-11-09",
      "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      "category": "Book Exchange",
      "place": "Room D6",
      "capacity": 130000,
      "assistance": 90000,
      "price": '$' + 100
    },
    {
      "image": "https://nypost.com/wp-content/uploads/sites/2/2022/03/batman-gotham-nyc.jpg?quality=75&strip=all",
      "name": "Batman",
      "date": "2021-3-11",
      "description": "Come see Batman fight crime in Gotham City.",
      "category": "Cinema",
      "place": "Room D1",
      "capacity": 11000,
      "assistance": 9300,
      "price": '$' + 225
    },
    {
      "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
      "name": "Avengers",
      "date": "2022-10-15",
      "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      "category": "Cinema",
      "place": "Room D1",
      "capacity": 9000,
      "estimate": 9000,
      "price": '$' + 250
    }
  ]
}


const fechaActual = data.fechaActual 

let arrayPastEvents = [];


for (let i = 0; i < data.eventos.length; i++) {

  if (data.eventos[i].date <= fechaActual) {
    arrayPastEvents.push(data.eventos[i]);
  } else {
    console.log('la fecha es mayor a la fecha actual de registro');
  }

}
console.log(arrayPastEvents);

for (let i = 0; i < arrayPastEvents.length; i++) {

  let id = `card${i+1}`
  let div = createLetters(id, arrayPastEvents[i]);
  document.getElementById('section').appendChild(div)

}

function createLetters(id, objetoData) {

  let div = document.createElement('div');
  div.id = id;
  div.className = 'swiper-slide'  

  div.innerHTML = ` 
      <img src="${objetoData.image}" alt="">
      <div class="card-description">
          <div class="card-title">
              <h4>${objetoData.name}</h4>
          </div>
          <div class="card-text">
              <p>${objetoData.description}</p>
          </div>
          <div class="card-link d-flex justify-content-evenly align-items-center">
          <h2>${objetoData.price}</h2>
              <a href="../pages/details.html?${id}">Ver más</a>
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

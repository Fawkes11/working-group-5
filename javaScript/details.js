import { data } from "./data.js";
const events = data.eventos;
console.log("eventos");
console.log(events);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log("params");
console.log(params);

const divImage = document.getElementById("card-img-detail");
const titleCard = document.getElementById("card-title-detail");
const liDate = document.getElementById("card-date");
const liDescription = document.getElementById("card-description");
const liCategory = document.getElementById("card-category");
const liLocation = document.getElementById("card-location");
const liCapacity = document.getElementById("card-capacity");
const liAttendance = document.getElementById("card-attendance");
const liPrice = document.getElementById("card-price");

//divImage.innerHTML = `<img src="${objetoData.image}" class="img-fluid imagen_details rounded-start rounded" alt="Evento Imagen">`
//titleCard.innerHTML = "Hello";
//document.title = titleCard.innerHTML;

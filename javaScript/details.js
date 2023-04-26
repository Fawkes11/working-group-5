const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const id = params.id;

let url = 'https://pro-talento.up.railway.app/api/amazing/' + id
console.log(url);

async function fecthApi(url) {
    try {
        let response = await fetch(url); //fecheo la api
        response = await response.json() // transformo la respuesta de la app en datos utilizables
        // response es un objeto de 2 propiedades
        let event = response.response
        const divImage = document.getElementById("card-img-detail");
        divImage.innerHTML = `<img src="${event.image}" class="img-fluid imagen_details rounded-start rounded" alt="Evento Imagen">`

        const titleCard = document.getElementById("card-title-detail");
        titleCard.innerHTML = event.name;
        document.title = event.name;

        let eventDate = new Date(event.date);
        let eYear = eventDate.toLocaleString("default", { year: "numeric" });
        let eMonth = eventDate.toLocaleString("default", { month: "short" });
        let eDay = eventDate.toLocaleString("default", { day: "numeric" });

        const liDate = document.getElementById("card-date");
        liDate.innerHTML = `<b> Date:</b> ${eDay}-${eMonth}-${eYear}`;

        const liDescription = document.getElementById("card-description");
        liDescription.innerHTML = `<b> Description:</b> ${event.description}`;

        const liCategory = document.getElementById("card-category");
        liCategory.innerHTML = `<b> Category:</b> ${event.category}`;;

        const liLocation = document.getElementById("card-location");
        liLocation.innerHTML = `<b> Place:</b> ${event.place}`;

        const liCapacity = document.getElementById("card-capacity");
        liCapacity.innerHTML = `<b> Capacity:</b> ${event.capacity}`;

        const liAttendance = document.getElementById("card-attendance");
        liAttendance.innerHTML = `<b> Assistance:</b> ${event.assistance}`;

        const liPrice = document.getElementById("card-price");
        liPrice.innerHTML = `<b> Price:</b> ${event.price}`;

    } catch (error) {
        console.log(error);
    }

}

fecthApi(url);

let url = `https://pro-talento.up.railway.app/api/amazing/`;
let date = '';
let eventsPast = [];
let eventsComing = [];

/* FUNCTION: fetch API */
async function fecthApi() {
    try {
        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        date = response.date
        console.log(date);

        eventsPast = response.response.filter((item) => item.date <= date)
        eventsComing = response.response.filter((item) => item.date >= date)
        console.log(eventsComing);

        // section 1
        higgestAttendance(eventsPast)
        let arrayPercentage = namePercentagePast(eventsPast);
        let min = arrayPercentage[arrayPercentage.length-1]
        let max = arrayPercentage[0]

        // section 2
        comingName(eventsComing)

        // section 3
        pastName(eventsPast)

    } catch (error) {
        console.error(error);
    }
}

fecthApi()

/* SECTION 1: Events Statictic */

/* function aux math calcs */
function namePercentagePast (eventsPast){

    let epPercetange = eventsPast.map((each)=> {

        const capacity = each.capacity
        const assistance = each.assistance
        const percentageAtte = ((assistance / capacity) * 100).toFixed(2);
        return {name:each.name, porcentage:percentageAtte}

    })
    epPercetange.sort((a, b) => b.porcentage - a.porcentage)

    return epPercetange;

}

/* function aux for show data */
function higgestAttendance() {
    const Higgest = document.getElementById('Higgest');

    for (let i = 0; i < eventsComing.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td style="text-align: center;" ></td>
                <td style="text-align: center;" ></td>
                <td style="text-align: center;" ></td>
                `
        Higgest.appendChild(row)
    }
}

/* SECTION 2: Upcoming Events statictic by name (TO-DO: category) */

/* function aux 1 */
function percentageAttendance() {

    const percentages = [];

    for (let i = 0; i < eventsComing.length; i++) {
        const capacity = eventsComing[i].capacity;
        const estimate = eventsComing[i].estimate
        // Valida que assistance y capacity sean números antes de calcular el porcentaje
        if (typeof capacity == 'number') {
            const percentageAtte = ((estimate / capacity) * 100).toFixed(2);
            percentages.push(percentageAtte);
        } else {
            percentages.push('-');
        }

    }
    return percentages;
}

/* function aux 2 */
function revenues() {

    const revenues = [];

    for (let i = 0; i < eventsComing.length; i++) {
        const estimate = eventsComing[i].estimate;
        if (typeof estimate == 'number') {
            const totalEstimate = estimate;
            revenues.push(totalEstimate)
        } else {
            revenues.push('-');
        }

    }
    return revenues;
}

/* main function section 2 */
function comingName() {

    const categoryComing = document.getElementById('categoryComing');
    const percentages = percentageAttendance();
    const revenuesData = revenues();

    for (let i = 0; i < eventsComing.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td style="text-align: center;" >${eventsComing[i].name}</td>
                <td style="text-align: center;" >${revenuesData[i]}</td>
                <td style="text-align: center;" >${percentages[i]} %</td>
                `
        categoryComing.appendChild(row)
    }

}

/* SECTION 3: Past Events statictic by name (TO-DO: category) */

/* function aux 1 */
function percentagePast() {

    const percentages = [];

    for (let i = 0; i < eventsPast.length; i++) {
        const capacity = eventsPast[i].capacity;
        const assistance = eventsPast[i].assistance
        // Valida que assistance y capacity sean números antes de calcular el porcentaje
        if (typeof capacity == 'number') {
            const percentageAtte = ((assistance / capacity) * 100).toFixed(2);
            percentages.push(percentageAtte);
        } else {
            percentages.push('-');
        }

    }
    return percentages;
}

/* function aux 2 */
function revenuesPast() {

    const revenues = [];

    for (let i = 0; i < eventsPast.length; i++) {
        const assistance = eventsPast[i].assistance;
        if (typeof assistance == 'number') {
            const totalAssitence = assistance;
            revenues.push(totalAssitence)
        } else {
            revenues.push('-');
        }

    }
    return revenues;
}

/* main function 3 */
function pastName() {

    const categoryPast = document.getElementById('categoryPast');
    const percentage = percentagePast();
    const revenuesDataPast = revenuesPast();

    for (let i = 0; i < eventsPast.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="text-align: center;" >${eventsPast[i].name}</td>
            <td style="text-align: center;" >${revenuesDataPast[i]}</td>
            <td style="text-align: center;" >${percentage[i]} %</td>
            `
        categoryPast.appendChild(row)
    }
}

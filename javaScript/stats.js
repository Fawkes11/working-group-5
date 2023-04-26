let url = `https://pro-talento.up.railway.app/api/amazing/`;
let date = '';
let eventsPast = [];
let eventsComing = [];

/* FUNCTION: fetch API */
async function fecthApi() {
    try {
        let response = await fetch(url);
        response = await response.json();
        // console.log(response.response);

        date = response.date
        // console.log(date);

        eventsPast = response.response.filter((item) => item.date < date)
        eventsComing = response.response.filter((item) => item.date >= date)
        // console.log(eventsComing);

        // section 1
        let arrayPercentage = namePercentagePast(eventsPast);
        let min = arrayPercentage[arrayPercentage.length-1]
        let max = arrayPercentage[0]
        let maxCap = maxByCapacity(response.response)
        higgestAttendance(max, min, maxCap)

        // section 2
        comingName(eventsComing)

        // section 3
        pastName(eventsPast)

    } catch (error) {
        console.log(error);
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

/* function aux ordering by capacity */
function maxByCapacity(allEvents){
    let ordered = allEvents.sort((a, b) => b.capacity - a.capacity)
    return ordered[0]
}

/* function aux for show data */
function higgestAttendance(max, min, maxCap) {

    const higgest = document.getElementById('Higgest');
    const row = document.createElement('tr');

    row.innerHTML = `
            <td style="text-align: center;" >${max.name} with ${max.porcentage}%</td>
            <td style="text-align: center;" >${min.name} with ${min.porcentage}%</td>
            <td style="text-align: center;" >${maxCap.name} with capacity ${maxCap.capacity}</td>
            `
    higgest.appendChild(row);

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
        const price = eventsComing[i].price;
        
            const totalEstimate = estimate* price
            revenues.push(totalEstimate)
       
    }
    return revenues;
}

/* main function section 2 */

function comingName() {
    const categoryComing = document.getElementById('categoryComing');
    const percentages = percentageAttendance();
    const revenuesData = revenues();
    const addedCategories = {};
    const categoryAdd = {};
  
    for (let i = 0; i < eventsComing.length; i++) {
      const category = eventsComing[i].category;
      if (!addedCategories[category]) { // Si la categoría no se ha agregado aún
        addedCategories[category] = true; // Marcar como agregada
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="text-align: center;" >${category}</td>
            <td style="text-align: center;" >$ ${revenuesData[i]}</td>
            <td style="text-align: center;" >${percentages[i]} %</td>
        `;
        categoryComing.appendChild(row);

        if (!categoryAdd[category]) {
            categoryAdd[category]={
                revenueSum: 0,
                percentageSum: 0
            } 
        }
        categoryAdd[category].revenueSum += revenuesData[i];
        categoryAdd[category].percentageSum += percentages[i]

      }
    }
  }
/* SECTION 3: Past Events statictic by name (TO-DO: category) */

/* function aux 1: porcentaje de asistencia y ganancia*/
function sumsPast() {

    const answer = [];
    const categories = [];
    const totalAsistencia = eventsPast.reduce((acum, valor) => {
        let sum = acum
        sum = sum + valor.assistance
        return sum
    }, 0);

    for (let i = 0; i < eventsPast.length; i++) {
        let category = eventsPast[i].category;

        //ganancia
        let assistance = eventsPast[i].assistance;
        let price = eventsPast[i].price;
        let totalRevenue = assistance * price;

        // porcentaje de asistencia
        let capacity = eventsPast[i].capacity;
        let percentageAtte = (assistance / capacity) * 100;

        //agregando
        if (!categories.includes(category)) {
            categories.push(category);
            answer.push({category, totalRevenue, percentageAtte});
        } else {
            let categoryData = answer.findIndex((row) => row.category === category);
            answer[categoryData].totalRevenue = answer[categoryData].totalRevenue + totalRevenue;
            let aux = percentageAtte / totalAsistencia
            answer[categoryData].percentageAtte = answer[categoryData].percentageAtte + aux;
        }
    }
    return answer;
}

/* main function 3 */
function pastName() {

    const categoryPast = document.getElementById('categoryPast');
    const arraysums = sumsPast();

    for (let i = 0; i < arraysums.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="text-align: center;" >${arraysums[i].category}</td>
            <td style="text-align: center;" >${arraysums[i].totalRevenue}</td>
            <td style="text-align: center;" >${arraysums[i].percentageAtte.toFixed(2)}%</td>
            `
        categoryPast.appendChild(row)
    }
}

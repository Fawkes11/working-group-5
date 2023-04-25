let url = `https://pro-talento.up.railway.app/api/amazing/`;
let date = '';
let eventsPast = [];
let eventsComing = [];

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
        pastName(eventsPast)
        comingName(eventsComing)
        higgestAttendance(eventsPast)

    } catch (error) {
        console.error(error);
    }
}

fecthApi()


/*--------------- process past  view the information --------------- */
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
/*-------- percentage past ----------*/
function percentagePast() {
    const percentages = [];
    for (let i = 0; i < eventsPast.length; i++) {
        const capacity = eventsPast[i].capacity;
        const assistance = eventsPast[i].assistance
        // console.log (` esttimate : ${estimate},  capacity: ${capacity}`);

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

/*--------------- process upComing  view the information --------------- */
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
/*---------- estimate --------------*/
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
/*---------- percentage attendance --------------*/
function percentageAttendance() {
    const percentages = [];
    for (let i = 0; i < eventsComing.length; i++) {
        const capacity = eventsComing[i].capacity;
        const estimate = eventsComing[i].estimate
        // console.log (` esttimate : ${estimate},  capacity: ${capacity}`);

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

/*---- -------*/
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

// function Higgest (){
//     const Highest = 0;

//     for (let i = 0; i < eventsPast.length; i++) {
//      let attendancePercentage = (eventsPast[i].assistance / eventsPast[i].capacity)*100;
     
//      if (attendancePercentage > Highest) {
//         Highest = attendancePercentage;
//      }

//     }
//     return  ;

// }

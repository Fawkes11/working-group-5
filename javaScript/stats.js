const id = '6351b0a1b82050da15b3a88a'
const url = 'https://pro-talento.up.railway.app/api/amazing/' + id;

const answerHiggest = document.getElementById('answerHiggest');

document.addEventListener('DOMContentLoaded', higgestPercentage)


async function higgestPercentage(){

    try {
        let response = await fetch(url); 
         response = await response.json() 
        let { image, description, date, assistance, capacity, place } = response.response;
        // mostrarHTML(response);
        
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${assistance}</td>
        <td>${assistance}</td>
        <td>${assistance}</td>
        `
        answerHiggest.appendChild(row)
    } catch (error) {
        console.error(error);
    }

}


// function mostrarHTML(datos){

//     datos.forEach(items => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//         <td>${items.assistance}</td>
        
//         `
//         answerHiggest.appendChild(row)
        
//     });
     
    
// }



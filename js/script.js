// DATI INPUT

const containerElem = document.querySelector(".container");

// ESECUZIONE


let result = "";

const photos6 = () => { // funzione per creare 6 card con le 6 foto create dall'api

    photo.forEach(curPhoto => {  //ciclo forEach per array in cui a ogni iterazione aggiung card foto e assegno tutto a result
        result +=
            `<div class="card">
               <img class="btn-pin" src="./img/pin.svg" alt="immagine puntina ferma foto">
               <div class="card-img">
                 <img src=${curPhoto.url} alt="">
               </div>
               <div class="card-text">
                 ${curPhoto.title}
               </div>
             </div>`

    });
};

let photo = [];

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
    console.log(resp.data); //ricevo array di oggetti 

    photo = resp.data;

    photos6()//richiamo funzione 

    // OUTPUT
    containerElem.innerHTML = result; //stampo in pagina
});



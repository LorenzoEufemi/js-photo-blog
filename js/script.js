// DATI INPUT

const containerElem = document.querySelector(".container");

const btnElem = document.querySelector(".btn");

const cardImgElem = document.querySelector(".card-img");

const cardTextElem = document.querySelector(".card-text");

// ESECUZIONE


let result = "";

const photos6 = () => { // funzione per creare 6 card con le 6 foto create dall'api

    photo.forEach((curPhoto, index) => {  //ciclo forEach per array in cui a ogni iterazione aggiung card foto e assegno tutto a result
        result +=
            `<div class="card" data-card="${index}">
               <img class="btn-pin" src="./img/pin.svg" alt="immagine puntina ferma foto">
               <div class="card-img">
                 <img src=${curPhoto.url} alt="">
               </div>
               <div class="card-text">
                 ${curPhoto.title}
               </div>
               <button class="btn" onclick="deleteCard(${index})">cancella</button> 
             </div>`
        // fatto con aiuto di Loris per quanto riguarda la parte del bonus che mi ha assegnato lui
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


function deleteCard(index) {

    document.querySelector('[data-card="' + index + '"]').remove();
}
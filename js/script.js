// DATI INPUT

const containerElem = document.querySelector(".container");

const btnElem = document.querySelector(".btn");

const cardImgElem = document.querySelector(".card-img");

const cardTextElem = document.querySelector(".card-text");

const overlayElem = document.querySelector(".body");

const imgOverElem = document.querySelector(".img-over");

const btnOverElem = document.querySelector(".btn-over");

// ESECUZIONE


let result = "";

const photos6 = () => { // funzione per creare 6 card con le 6 foto create dall'api

  photo.forEach((curPhoto, index) => {  //ciclo forEach per array in cui a ogni iterazione aggiung card foto e assegno tutto a result
    result +=
      `<div class="card" data-card="${index}" >
               <img class="btn-pin" src="./img/pin.svg" alt="immagine puntina ferma foto">
               <div class="card-img" data-photo-url="${curPhoto.url}">
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



const addClickListener = () => { //funzione in cui prelevo ad ogni card la card-img 
  const cards = document.querySelectorAll(".card-img");
  console.log(cards)
  cards.forEach(curCard => {        //ciclo forEach per ogni img-card

    curCard.addEventListener("click", () => {     // al click su ogni img-card essa appare in risalto

      console.log(curCard.dataset.photoUrl)
      imgOverElem.innerHTML = `  <img src="${curCard.dataset.photoUrl}" alt=""> `
      on()
    })

  })
  btnOverElem.addEventListener("click", () => {  // al click sul bottone si chiude
    off()
  })

};





let photo = [];

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
  console.log(resp.data); //ricevo array di oggetti 

  photo = resp.data;

  photos6()//richiamo funzione 

  // OUTPUT
  containerElem.innerHTML = result; //stampo in pagina


  addClickListener()//richiamo funzione


});


function deleteCard(index) {

  document.querySelector('[data-card="' + index + '"]').remove();
};


function on() { // funzione per mettere display block all'elemento
  overlayElem.style.display = "block";
};

function off() {// funzione per mettere display none all'elemento
  overlayElem.style.display = "none";
};


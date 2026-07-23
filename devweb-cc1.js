"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");


//EXERCICE 1 : RECHERCHE DICHOTOMIQUE

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  maxGuesses = Math.floor(Math.random() * ($maxUsr.value)) + 1;

  $output.textContent = `Partie lancé! Trouvé le nombre secret entre 0 et ${$maxUsr.value}, en au plus ${maxGuesses}.`;
  
  $guessBtn.disabled = false;
  };

$startBtn.addEventListener("click", launchGame);


$guessBtn.addEventListener("click", function() {
    const userGuess = Number($numUsr.value);

    nbGuesses++;
    
      let mssge = "";
      let defaite = false;

    if (userGuess === secretNumber) {
    mssge = `Gagné ! Vous avez trouvé le nombre ${secretNumber} en ${nbGuesses} coups.`;
    defaite = true;
  } 
    else if (nbGuesses >= maxGuesses) {
    mssge = `Perdu... vous n'avez plus de testes. Le nombre secret était ${secretNumber}.`;
    defaite = true;
  } 
    else if (userGuess < secretNumber) {
    mssge = `${userGuess} est trop bas. (${maxGuesses - nbGuesses} testes restants)`;
  } 
    else {
    mssge = `${userGuess} est trop haut. (${maxGuesses - nbGuesses} testes restants)`;
  }

   $output.textContent = mssge;

   if(defaite){
    $guessBtn.disabled = true;
   }

});


$numUsr.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    $guessBtn.click(); 
  }
});







//EXERCICE 2 : LA VACHE QUI TACHE 
function addCow(evt) {
  console.debug(evt.x, evt.y);
  
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);

  

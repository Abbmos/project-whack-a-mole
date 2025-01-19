/*---------------------Variables-----------------------*/
let SCORE = 0;
let MAX_MISSED_HOLES
let timerInc = 31;
let loseMessage = "YOU LOST!!!!";
/*-------------------cached elements-------------------*/

const holes = document.querySelectorAll('.hole');
const scoreElement = document.querySelector("#score-message");
const mistakeElement = document.querySelector("#mistake");
const timerElement= document.querySelector("#timer");
const bodyELement = document.querySelector("body");
const gameContElement = document.querySelector("#game-container");
const gameStartElement = document.querySelector("#game_start");
const imgElements = document.querySelectorAll("img");
scoreElement.textContent = SCORE;

/*---------------------Functions-----------------------*/
function playerLost() {
// alert('PLAYER LOST');


bodyELement.style.backgroundColor="magenta";
let LOSTMESSAGE= document.createAttribute('div');
LOSTMESSAGE.textContent=loseMessage;
gameContElement.appendChild(LOSTMESSAGE);
}
function activateRandomHole() {

  holes.forEach(hole => hole.classList.remove('active'));
  imgElements.forEach(img => img.src="")

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add('active');
  imgElements[randomIndex].src="mole.jpg";
  
  if (timerInc>=1){
  timerInc--;
timerElement.textContent=timerInc;}
else {playerLost();}
}

function endGame(){



}

let addMistake = () => {


  if (mistakeElement.textContent === "_ _ _") {
    mistakeElement.textContent = "X _ _";


  } else
    if (mistakeElement.textContent === "X _ _") {

      mistakeElement.textContent = "X X _";

    }
    else if (mistakeElement.textContent === "X X _") {

      mistakeElement.textContent = "X X X";
      playerLost();

    } else if (mistakeElement.textContent === "X X X") {


    }

}
   let updateTimer = () => {

  setInterval(activateRandomHole, 1000);


 }
let startGame = () => {
updateTimer();
gameStartElement.classList.add("hidden");

}
let init = () => {
sta



}
// let increaseScore = (h) =>{
//   if (h.classList.contains('active')){
// SCORE+=10;
// scoreElement.textContent=SCORE;}}

/*--------------------Event Listener---------------------*/
holes.forEach(hole => {


  hole.addEventListener("click", () => {

    if (hole.classList.contains("active")) {
      SCORE += 10;
      scoreElement.textContent = SCORE;
    }
    else if (!hole.classList.contains("active")) {
      addMistake();


    }

  });

}


);
gameStartElement.addEventListener("click", startGame);
// startGame();
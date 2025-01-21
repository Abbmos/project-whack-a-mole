/*---------------------Variables-----------------------*/
let SCORE = 0;
let MAX_MISSED_HOLES
let timerInc = 31;
let loseMessage = "YOU LOST!!!!";
let timer;
/*-------------------cached elements-------------------*/

const holes = document.querySelectorAll('.hole');
const scoreElement = document.querySelector("#score-message");
const mistakeElement = document.querySelector("#mistake");
const timerElement = document.querySelector("#timer");
const bodyELement = document.querySelector("body");
const gameContElement = document.querySelector("#game-container");
const gameStartElement = document.querySelector("#game_start");
const imgElements = document.querySelectorAll("img");
scoreElement.textContent = SCORE;

/*---------------------Functions-----------------------*/
playerWin = () => {

  gameContElement.classList.add(".hidden")
  endGame();
}
function playerLost() {



  bodyELement.style.backgroundColor = "magenta";

  endGame();
  // let LOSTMESSAGE= document.createAttribute('div');
  // LOSTMESSAGE.textContent=loseMessage;
  // gameContElement.appendChild(LOSTMESSAGE);


}
function activateRandomHole() {
  holes.forEach(hole=> hole.classList.remove('hole-stop'));
  holes.forEach(hole => hole.classList.remove('active'));
  imgElements.forEach(img => img.src = "hole-empty.PNG")

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add('active');
  imgElements[randomIndex].src = "mole.png";
  checkWin();
  if (timerInc >= 1) {
    timerInc--;
    timerElement.textContent = timerInc;
  }
  else { playerLost(); }
}

function endGame() {
  
  stopTimer();
  // mistakeElement.textContent="_ _ _";
  // timerElement.textContent=0;
SCORE=0;
  holes.forEach(hole => hole.classList.remove('active'));
  holes.forEach(hole=> hole.classList.add('hole-stop'));
  // imgElements.forEach(img => img.src = "empty.png")
  gameStartElement.textContent = "Restart";
  gameStartElement.classList.remove("hidden");
  // gameStartElement.style.display="hidden";

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

let checkWin = () => {
  console.log("heeyyy");
  console.log(SCORE);
  if (SCORE >= 150) {
    playerWin();
    endGame();
  }



}

let updateTimer = (interval) => {
  // if (timerElement.textContent!=0){
  interval = 1000;

  timer = setInterval(activateRandomHole, interval);
  console.log(interval);


}
let stopTimer = () => {
  clearInterval(timer);
}

let toggleDiv = () => {
  if (mistakeElement.style.display!=="none"){
   
   scoreElement.style.display="none";
   holes.forEach(hole => {hole.style.display="none";  })
  mistakeElement.style.display="none";}
else if (mistakeElement.style.display==="none"){

  scoreElement.style.display="flex";
  holes.forEach(hole => {hole.style.display="flex";  })
 mistakeElement.style.display="flex";



}
}

let startGame = () => {
  MAX_MISSED_HOLES = 3;
  mistakeElement.textContent = "_ _ _";
  timerElement.textContent = 0;
  scoreElement.textContent = SCORE;
  timerInc = 31;
  bodyELement.style.backgroundColor = "white";
  scoreElement.textContent = 0;
  updateTimer();
  gameStartElement.classList.add("hidden");
  // toggleDiv();
  // gameStartElement.style.display="hidden";
  

}


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
// hideDiv();
// startGame();
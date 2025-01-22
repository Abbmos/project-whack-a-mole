/*---------------------Variables-----------------------*/
let SCORE = 0;
let MAX_MISSED_HOLES
let timerInc = 31;
let timer;
let randomIndex;
let holeImages = "mole-NB.PNG";
/*-------------------cached elements-------------------*/

const holes = document.querySelectorAll('.hole');
const scoreElement = document.querySelector("#score-message");
const mistakeElement = document.querySelector("#mistake");
const timerElement = document.querySelector("#timer");
const bodyELement = document.querySelector("body");
const gameContElement = document.querySelector("#game-container");
const gameStartElement = document.querySelector("#game_start");
const imgElements = document.querySelectorAll("img");
scoreElement.textContent = `Score: ${SCORE}`;

/*---------------------Functions-----------------------*/
playerWin = () => {

  gameContElement.classList.add(".hidden")
  mistakeElement.textContent="You Won!";
  mistakeElement.style.maxWidth="100%";
  endGame();
}
function playerLost() {



  bodyELement.style.backgroundColor = "magenta";
mistakeElement.textContent="You Lost!";
  endGame();
  

}
function activateRandomHole() {
  holes.forEach(hole => hole.classList.remove('hole-stop'));
  holes.forEach(hole => hole.classList.remove('active'));
  imgElements.forEach(img => img.src = "hole-empty-NB.PNG")

   randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add('active');

imgElements[randomIndex].src = holeImages;
  checkWin();
  if (timerInc >= 1) {
    timerInc--;
    timerElement.textContent = `⏲:${timerInc}s`;
  }
  else { playerLost(); }
}

function endGame() {

  stopTimer();
 
  SCORE = 0;
  holes.forEach(hole => hole.classList.remove('active'));
  holes.forEach(hole => hole.classList.add('hole-stop'));
 
  gameStartElement.textContent = "Restart";
  gameStartElement.classList.remove("hidden");
  

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
  
  
  if (SCORE >= 150) {
    playerWin();
    endGame();
  }



}

let updateTimer = (interval) => {
  
  interval = 1000;

  timer = setInterval(activateRandomHole, interval);



}
let stopTimer = () => {
  clearInterval(timer);
}

let toggleDiv = () => {
  if (mistakeElement.style.display !== "none") {

    scoreElement.style.display = "none";
    holes.forEach(hole => { hole.style.display = "none"; })
    mistakeElement.style.display = "none";
  }
  else if (mistakeElement.style.display === "none") {

    scoreElement.style.display = "flex";
    holes.forEach(hole => { hole.style.display = "flex"; })
    mistakeElement.style.display = "flex";



  }
}

let startGame = () => {
  MAX_MISSED_HOLES = 3;
  mistakeElement.textContent = "_ _ _";
  timerElement.textContent = `⏲: ${0}s`;
  scoreElement.textContent = `Score: ${SCORE}`;
  timerInc = 31;
  bodyELement.style.backgroundColor = "white";
  scoreElement.textContent = `Score: ${0}`;
  updateTimer();
  gameStartElement.classList.add("hidden");
 


}


/*--------------------Event Listener---------------------*/
holes.forEach(hole => {


  hole.addEventListener("click", () => {

    if (hole.classList.contains("active")) {

      SCORE += 10;
      scoreElement.textContent = `Score: ${SCORE}`;
      let holeID = hole.id;
      let idx = holeID.slice(5, 6);
      imgElements[idx - 1].src = "mole-angry-NB.PNG";

    }
    else if (!hole.classList.contains("active")) {
      addMistake();


    }

  });


}


);
gameStartElement.addEventListener("click", startGame);

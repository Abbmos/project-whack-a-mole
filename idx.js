playElement = document.querySelector("#playBtn");
instructionsElement = document.querySelector("#instructionsBtn");
instructionsTextElement = document.querySelector("#instructions");

playElement.addEventListener("click", () => {
window.location.href="game.html";

});

/*when the instructions button is clicked, the instructions will be displayed*/

instructionsElement.addEventListener("click", () => { 
    instructionsTextElement.classList.toggle("hidden");
});

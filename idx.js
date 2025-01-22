playElement = document.querySelector("#playBtn");
instructionsElement = document.querySelector("#instructionsBtn");
instructionsTextElement = document.querySelector("#instructions");

playElement.addEventListener("click", () => {
window.location.href="game.html";

});



instructionsElement.addEventListener("click", () => { 
    instructionsTextElement.classList.toggle("hidden");
});

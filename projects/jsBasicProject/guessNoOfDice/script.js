let guessInput = document.getElementById("guessInput"); 
let submitBtn = document.getElementById("submitBtn");
let resultDisplay = document.getElementById("result");
let randomNumber = Math.floor(Math.random() * 6) + 1;

function checkGuess() {
    let userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
        resultDisplay.textContent = "Congratulations! You guessed the correct number: " + randomNumber;
    } else {
        resultDisplay.textContent = "Sorry, the correct number was: " + randomNumber;
    }
    randomNumber = Math.floor(Math.random() * 6) + 1;
}

submitBtn.addEventListener("click", checkGuess);


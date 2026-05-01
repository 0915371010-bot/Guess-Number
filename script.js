console.log("Script Started");
let secretNumber = 0;
let guessCount = 0;

// Get the difficulty buttons
let easyButton = document.getElementById("easy-btn");
let mediumButton = document.getElementById("medium-btn");
let hardButton = document.getElementById("hard-btn");
let submitButton = document.getElementById("submit-guess");

//Test if buttons work
easyButton.addEventListener("click", function() {
    // Makes a random number 1-50
    secretNumber = Math.floor(Math.random() * 50) + 1;
    guessCount = 0; // Reset guess counter

    //change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 50!";
});

mediumButton.addEventListener("click", function() {
    // Make a ramdon number 1-100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0; // reset guess counter

    // Change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 100!";
});

hardButton.addEventListener("click", function() {
    // Make a number between 500
    secretNumber = Math.floor(Math.random() * 500) + 1
    guessCount = 0; // resets guess counter

    //Change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 500!";

});

// Function to handle guesses
function handleGuess() {
    if (secretNumber === 0) {
        alert("Please choose a diffcultu first!");
        return;
    }
    let guessInput = document.getElementById("guess-input");
    let playerGuess = Number(guessInput.value);

    guessCount = guessCount + 1; // counts each guess
    
    if (playerGuess == secretNumber) {
        alert("Correct! You win!");
    } else if (playerGuess > secretNumber) {
        alert("Too high! Try again!");
    } else {
        alert("Too low! Try again!");
    }
}

submitButton.addEventListener("click", handleGuess);


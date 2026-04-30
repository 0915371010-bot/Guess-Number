console.log("Script Started");
let secretNumber = 0;

// Get the difficulty buttons
let easyButton = document.getElementById("easy-btn");
let mediumButton = document.getElementById("medium-btn");
let hardButton = document.getElementById("hard-btn");

//Test if buttons work
easyButton.addEventListener("click", function() {
    // Makes a random number 1-50
    secretNumber = Math.floor(Math.random() * 50) + 1;

    //change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 50!";
});

mediumButton.addEventListener("click", function() {
    // Make a ramdon number 1-100
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 100!";
});

hardButton.addEventListener("click", function() {
    // Make a number between 500
    secretNumber = Math.floor(Math.random() * 500) + 1

    //Change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 500!";

});

// Get submit button
let submitButton = document.getElementById("submit-guess");

// When submit button is clicked
submitButton.addEventListener("click", function() {
    // Get the player's guess from the input box
    let guessInput = document.getElementById("guess-input");
    let playerGuess = guessInput.value;
    
    // Show what they guessed
    alert("You guessed: " + playerGuess);
});
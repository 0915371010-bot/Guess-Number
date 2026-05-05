console.log("Script Started");
let secretNumber = 0;
let guessCount = 0;
let maxLives = 5;
let currentLives = 5;


// Get the difficulty buttons
let easyButton = document.getElementById("easy-btn");
let mediumButton = document.getElementById("medium-btn");
let hardButton = document.getElementById("hard-btn");
let submitButton = document.getElementById("submit-guess");

function updateLivesDisplay() {
    let livesDisplay = document.getElementById("lives-display");
    let hearts = "";
    for (let i = 0; i < currentLives; i++) {
        hearts = hearts + "❤️";
    }
    livesDisplay.innerText = hearts;
}

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
    secretNumber = Math.floor(Math.random() * 500) + 1;
    guessCount = 0; // resets guess counter

    //Change the text to show the range
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 500!";

});

function handleGuess() {
    if (secretNumber === 0) {
        alert("Please choose a difficulty first!");
        return;
    }
    
    let guessInput = document.getElementById("guess-input");
    let playerGuess = Number(guessInput.value);
    guessCount = guessCount + 1;
    
    if (playerGuess == secretNumber) {
        playWinAnimation
        alert("Correct! You win!");
        resetGame();
    } else {
        currentLives = currentLives - 1;  // Lose a life!
        updateLivesDisplay();  // Update the hearts
        
        // Check if game is over
        if (currentLives === 0) {
            playLoseAnimation
            alert("Game Over! The number was " + secretNumber);
            resetGame();
            return;
        }
        
        if (playerGuess > secretNumber) {
            alert("Too high! Try again!");
        } else {
            alert("Too low! Try again!");
        }
    }
}


submitButton.addEventListener("click", handleGuess);

function resetGame() {
    currentLives = maxLives;
    updateLivesDisplay();
    secretNumber = 0;
    guessCount = 0;
}


function playWinAnimation() {
    let gameContainer = document.getElementById("game-container");
    gameContainer.style.background = "linear-gradient(45deg, #27ae60, #2ecc71)";
    gameContainer.style.transform = "scale(1.05)";
    
    // Change back after 1 second
    setTimeout(function() {
        gameContainer.style.background = "#ffffff";
        gameContainer.style.transform = "scale(1)";
    }, 1000);
}


function playLoseAnimation() {
    let gameContainer = document.getElementById("game-container");
    gameContainer.style.background = "linear-gradient(45deg, #e74c3c, #c0392b)";
    gameContainer.style.transform = "scale(0.95)";
    
    // Change back after 1 second
    setTimeout(function() {
        gameContainer.style.background = "#ffffff";
        gameContainer.style.transform = "scale(1)";
    }, 1000);
}



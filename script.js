console.log("Script Started");
// Game state variables
let secretNumber = 0; // hold the random number player needs to guess
let guessCount = 0;
let maxLives = 5;
let currentLives = 5;
//Gets html elements
let easyButton = document.getElementById("easy-btn");
let mediumButton = document.getElementById("medium-btn");
const hardButton = document.getElementById("hard-btn");
let submitButton = document.getElementById("submit-guess");
let gameContainer = document.getElementById("game-container");

// Helper function that generates and returns a random number
function generateRandomNumber(maxNumber) {
    let randomNum = Math.floor(Math.random() * maxNumber) + 1;
    return randomNum;
}

// updates the heart display based on current lives and function is called when we need to update hearts on screen
function updateLivesDisplay() {
    let livesDisplay = document.getElementById("lives-display");
    let hearts = "";
    for (let i = 0; i < currentLives; i++) {
        hearts = hearts + "❤️"; // every time the loop runs and will add one hearts
    }
    livesDisplay.innerText = hearts;
}

// Plats green animation when player wins
function playWinAnimation() {
    let gameContainer = document.getElementById("game-container");
    gameContainer.style.background = "linear-gradient(45deg, #27ae60, #2ecc71)";
    gameContainer.style.transform = "scale(1.05)";
    
    setTimeout(function() {
        gameContainer.style.background = "#ffffff";
        gameContainer.style.transform = "scale(1)";
    }, 1000);
}

function playLoseAnimation() {
    let gameContainer = document.getElementById("game-container");
    gameContainer.style.background = "linear-gradient(45deg, #e74c3c, #c0392b)";
    gameContainer.style.transform = "scale(0.95)";
    
    // Reset to normal after 1 second
    setTimeout(function() {
        gameContainer.style.background = "#ffffff";
        gameContainer.style.transform = "scale(1)";
    }, 1000);
}

// Resets the game to starting state
function resetGame() {
    currentLives = maxLives;
    updateLivesDisplay();
    secretNumber = 0;
    guessCount = 0;
}
// easy difficulty: random number 1-50
easyButton.addEventListener("click", function() {
    secretNumber = generateRandomNumber(50);
    guessCount = 0;
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 50!";
});
// medium diffculty: random number 1-100
mediumButton.addEventListener("click", function() {
    secretNumber = generateRandomNumber(100);
    guessCount = 0;
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 100!";
});
// Hard diffcultyL random number 1-500
hardButton.addEventListener("click", function() {
    secretNumber = generateRandomNumber(500);
    guessCount = 0;
    let rangeDisplay = document.getElementById("range-display");
    rangeDisplay.innerText = "Guess a number between 1 and 500!";
});
// Main function that handles player guesses 
function handleGuess() {
    if (secretNumber === 0) {
        alert("Please choose a difficulty first!");
        return;
    }
    // Get player's gyess from input
    let guessInput = document.getElementById("guess-input");
    let playerGuess = Number(guessInput.value);
    guessCount = guessCount + 1;
    
    // check if guess is correct
    if (playerGuess == secretNumber) {
        playWinAnimation();
        // wait 1 second then show win message
        setTimeout(function() {
            alert("Correct! You win!");
            resetGame();
        }, 1000);
    } else {
        // wrong guess lose a life
        currentLives = currentLives - 1;
        updateLivesDisplay();
        // check if game over (no lives left)
        if (currentLives === 0) {
            playLoseAnimation();
            setTimeout(function() {
                alert("Game Over! The number was " + secretNumber);
                resetGame();
            }, 1000);
            return;
        }
        // give hints too high or too low
        if (playerGuess > secretNumber) {
            alert("Too high! Try again!");
        } else {
            alert("Too low! Try again!");
        }
    }
}
// Listen for submit button clicks
submitButton.addEventListener("click", handleGuess);
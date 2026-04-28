console.log("Script Started");

// Get the difficulty buttons
let easyButton = document.getElementById("easy-btn");
let mediumButton = document.getElementById("medium-btn");
let hardButton = document.getElementById("hard-btn");

//Test if buttons work
easyButton.addEventListener("click", function() {
    alert("Easy selected!");
});

mediumButton.addEventListener("click", function() {
    alert("Medium selected!");
});

hardButton.addEventListener("click", function() {
    alert("Hard selected!");
});
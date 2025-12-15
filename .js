// Test to ensure javascript file is linked properly
// console.log("Hello, World!")

// Create a function that takes user input of 'Rock', 'Paper', or 'Scissors',
// and after taking input randomly generates the same possible options from
// the 'Computer' side. Output the 'Computer' choice and display user's choice.
// Show who the winner is and keep track of all previous moves.

// Input for user's choice

function getHumanChoice(choice) {
    choice = prompt("Rock, Paper, or Scissors? (Don't worry, the computer won't cheat...)")
    // Ensures that user chooses Rock, Paper, or Scissor only.
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        // Output successful choice message, can move onto next function for CPU
        choice = choice.toUpperCase()
        return console.log("Valid Option! You chose: " + choice);
    } else {
        // Output unsuccessful choice message, ask user to try again
        return console.log("Invalid Option, try again!");
    }
}

// Random choice for the 'Computer'
function getComputerChoice() {
    // Randomly selects a crude number between 1 and 10
    choice = ((Math.random()) * 10)
    if (choice <= 3) {
        // 3 and below chooses Rock
        return console.log("ROCK")
    } else if (choice <= 6){
        // 6 and below chooses Paper
        return console.log("PAPER")
    } else {
        // 10 and below chooses Scissors
        return console.log("SCISSORS")
    }
}

// Take both User and Computer input, analyze to determine winner, and output information
function rps() {
    getHumanChoice()
    getComputerChoice()

    
}

rps()
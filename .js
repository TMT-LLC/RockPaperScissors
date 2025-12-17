// Test to ensure javascript file is linked properly
// console.log("Hello, World!")

// Create a function that takes user input of 'Rock', 'Paper', or 'Scissors',
// and after taking input randomly generates the same possible options from
// the 'Computer' side. Output the 'Computer' choice and display user's choice.
// Show who the winner is and keep track of all previous moves.

// User's choice selection logic/algorithm
    // Input for user's choice
    function getHumanChoice() {
        // Asks for user's choice
        // Ensures that user's input is always converted to lowercase for validation
        let choice = prompt("Rock, Paper, or Scissors? (Don't worry, the computer won't cheat...)").toLowerCase();
        // Validates choice once lowercased to match either rock, paper, scissors, or false if invalid
        return validateHumanChoice(choice)
    }

    // Validate user's choice
    function validateHumanChoice (choice) {
        // Only allows choice to be following options
        if ((choice === "rock") | ("paper") | ("scissors")) {
            // Output successful choice message, can move onto next function for CPU
            console.log("Valid Option!")
            // Returns valid choice option
            return choice;
        } else {
            // Output unsuccessful choice message, ask user to try again
            console.log("Invalid Option, try again!");
            // Returns false, unable to use value for getHumanChoice
            return false
        }
    }

// Random choice for the 'Computer'
function getComputerChoice() {
    // Creates array of choice for the computer to choose from using const (unable to change)
    const choices = ["rock", "paper", "scissors"]
    // Use math.random, to randomly select a number from the array (0, 1, 2)
    // Use choices.length with a value of 3, to multiply the math.random to give that amount of options for possible use
    // Use math.floor to round up all possible values to avoid 2.99
    const randonChoice = Math.floor(Math.random() * choices.length)
    // From choices array, uses randomChoice variable (random value of 0, 1, or 2) to chose an option from the array
    return choices[randonChoice]
}


// Take both User and Computer input (parameters made from const global variables), analyze to determine winner, and output information to console.
function rps(humanSelection, computerSelection) {

    // Simple Tie scenario where both choices are the same
    if (humanSelection === computerSelection) {
        console.log("Tie!")
        return "tie";
    }

    // Explicitly stating in an array what beats what
    const winningMoves = {rock: "scissors", paper: "rock", scissors: "paper"
    }

    // Simple win decider algorithm using const winningMoves array
    if (winningMoves[humanSelection] === computerSelection) {
        console.log("User Wins!")
        return "user";
    } else {
        console.log("Computer Wins!")
        return "computer";
    }
}

// Keep track of choices to determine winner, define new variables to be used
const humanSelection = getHumanChoice() // See lines 9-33
const computerSelection = getComputerChoice() // See lines 35-45

// Call function, with parameters of user and computer choice being used
const result = rps(humanSelection, computerSelection) // See lines 48-69






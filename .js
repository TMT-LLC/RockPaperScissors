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
    // Randomly selects a crude number between 1 and 10
    choice = ((Math.random()) * 10)
    if (choice <= 3) {
        // 3 and below chooses Rock
        return "rock"
    } else if (choice <= 6){
        // 6 and below chooses Paper
        return "paper"
    } else {
        // 10 and below chooses Scissors
        return "scissors"
    }
}

// Keep track of choices to determine winner, define new variables to be used
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(humanSelection)
console.log(computerSelection)

// Initialize vlaues for score of each player
let u = 0
let c = 0

// Take both User and Computer input, analyze to determine winner, and output information
function rps(humanSelection, computerSelection) {

    // User win scenario
    if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection ==="paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper"
    )){
        console.log("User chose: " + humanSelection  + "! Computer chose: " + computerSelection + ". User Wins!")
        console.log("User has won: " + (u + 1) + " time(s).")
        return u + 1
    } 
    // Computer win scenario
    else if ((computerSelection === "rock" && humanSelection === "scissors") || (computerSelection ==="paper" && humanSelection === "rock") || (computerSelection === "scissors" && humanSelection === "paper"
    )){
        console.log("User chose: " + humanSelection  + "! Computer chose: " + computerSelection + ". Computer Wins!")
        console.log("Computer has won: " + (c + 1) + " time(s).")
        return c + 1
    }
    // Tie scenario
    else if ((humanSelection === "rock" && computerSelection === "rock") || (humanSelection ==="paper" && computerSelection === "paper") || (humanSelection === "scissors" && computerSelection === "scissors"
    )) {
        console.log("User and Computer both chose " + humanSelection + ", TIE!")
        return false
    }

}

// Call function, with parameters of user and computer choice being used
rps(humanSelection, computerSelection)
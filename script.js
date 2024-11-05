// Step 1: Check if JavaScript is linked correctly
// Variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "rock";
    else if (randomNum < 0.66) return "paper";
    else return "scissors";
}

// Function to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = '';

    // Determine the result and update scores
    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the message and score display
    updateDisplay(resultMessage);
    
    // Check if we have a winner
    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

// Function to update the display
function updateDisplay(message) {
    const messageDiv = document.getElementById('message');
    const scoreDiv = document.getElementById('score');
    messageDiv.textContent = message;
    scoreDiv.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
}

// Function to declare the winner and reset the game
function declareWinner() {
    const messageDiv = document.getElementById('message');
    if (humanScore === 5) {
        messageDiv.textContent = "Congratulations! You are the overall winner!";
    } else if (computerScore === 5) {
        messageDiv.textContent = "Computer wins the game. Better luck next time!";
    }
    // Reset scores after the game ends
    humanScore = 0;
    computerScore = 0;
}

const btn = document.querySelectorAll('button')

    btn.forEach(button => {
        button.addEventListener('click',() => 
            playRound(button.id));
        });

        
    

/*
// Step 6: Function to play the entire game
function playGame() {
    // Reset scores at the start
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game. Better luck next time!");
    } else {
        console.log("It's a draw!");
    }
}

// Start the game
playGame();
*/
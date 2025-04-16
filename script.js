let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

function getComputerChoice(){
    let number;
    number = Math.floor(Math.random() * 3) + 1;;
    if(number === 1){
        computerChoice = "Rock";
    } else if(number === 2){
        computerChoice = "Scissors";
    } else{
        computerChoice = "Paper";
    }
    return computerChoice;
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function getHumanChoice(){
    humanChoice = prompt("Please choose Rock, Paper, or Scissors");
    humanChoice = capitalizeFirstLetter(humanChoice);
    return humanChoice

}

function determineWinner() {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

function playRound(){
    getComputerChoice();
    getHumanChoice();
    determineWinner();
}

function playGame(){
    for(let i = 0; i < 6; i++){
        playRound();
    }
}

playGame();
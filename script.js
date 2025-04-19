let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let win = document.querySelector(".Winning-Container")
let heading = document.createElement("h3");
let scoreKeeper = document.createElement("h4")


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
        heading.textContent = "It's a tie!";
        win.appendChild(heading);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        heading.textContent = "You win!";
        win.appendChild(heading);
        humanScore++;
    } else {
        heading.textContent = "Computer wins!";
        win.appendChild(heading);
        computerScore++;
    }

    scoreKeeper.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    win.appendChild(scoreKeeper);
}

function playRound(choice){
   humanChoice = choice;
   getComputerChoice();
   determineWinner();
}

/*function playGame(){
    for(let i = 0; i < 6; i++){
        playRound();
    }
}

playGame(); */

rock.addEventListener("click", function(){
    playRound("Rock");
});

paper.addEventListener("click", function(){
    playRound("Paper");
});

scissors.addEventListener("click", function(){
    playRound("Scissors");
});
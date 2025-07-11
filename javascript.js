function getComputerChoice(){
    let random = Math.random();
    if (random <= 0.333){
        return "rock";
    }
    else if((random <= 0.666 && random > 0.333)){
        return "paper";
    }
    else{
        return "scissors";
    }
    
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    let computerText = "Your opponent chose " + computerChoice + "! \n";
    if (computerChoice == humanChoice){
        return "You both chose " + computerChoice + ", it's a tie!";
    }
    else if (computerChoice == "rock"){
        if (humanChoice == "scissors"){
            computerScore++
            return computerText + "Rock beats scissors, you lose!"
        }
        else if (humanChoice == "paper"){
            return computerText + "Paper beats rock, you win!"
            humanScore++
        }  
    }
    else if (computerChoice == "scissors"){
        if (humanChoice == "paper"){
            computerScore++
            return computerText +"Scissors beats paper, you lose!"
        }
        else if (humanChoice == "rock"){
            humanScore++
            return computerText +"Rock beats scissors, you win!"
        }
        
    }
    else if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            computerScore++
            return computerText +"Paper beats rock, you lose!"
        }
        else if (humanChoice == "scissors"){
            humanScore++
            return computerText +"Scissors beats paper, you win!"
        }
        
    }
    
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(computerScore, humanScore)
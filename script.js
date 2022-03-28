let compScore = 0;
let playerScore = 0;
let result;
function computerplay(){
    var compoptions = ["rock","paper","scissors"];
    let compchoice = compoptions[Math.floor(Math.random() * compoptions.length)];
    console.log("Computer choose = " + compchoice);
    return compchoice;
}
function playRound(playerSelection){
    playerSelection = window.prompt("Enter you choice: rock,paper,scissor");
    playerSelection = playerSelection.toLowerCase();
    let compSelection = computerplay();
    console.log("You choose =" +playerSelection)
    if(playerSelection === compSelection){
        console.log("You tie!")
    }
    else if(compSelection === 'scissors'){
    switch(playerSelection) {
        case 'paper': 
            console.log("You lose!Scissor beats paper");
            return '0';
            
        case 'rock':
            console.log("You win!Rock beats scissors");
            return '1';
            
    }}
    else if(compSelection === 'paper'){
        switch(playerSelection){
            case 'rock': 
            console.log("You lose!Paper beats rock");
            return '0';
            
        case 'scissors':
            console.log("You win!Scissors beats paper");
            return '1';
            
        }
    }
    else{
        console.log("Invalid entry");
    }
}
function game(){
    for(let i=0;i<5;i++){
         result = playRound();
         if(result === '1'){
            playerScore = playerScore + 1;
        }else if(result === '0'){
            compScore = compScore +1;
        }
    }
    console.log("Your score = "+playerScore+" wins");
    console.log("Computer score = "+compScore+" wins")
    if(playerScore === compScore){
        console.log("It's a draw");
    }else if(playerScore > compScore){
        console.log("You win!Bravo");
    }else if(compScore > playerScore){
        console.log("You lose!Try Again Next time")
    }
}
game();

// const playerSelection = "rock";
// console.log("Player choose = "+ playerSelection);
// const compSelection = computerplay();
// playRound();
// console.log(playRound(playerSelection, compSelection));
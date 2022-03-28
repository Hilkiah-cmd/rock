function computerplay(){
    var compoptions = ["rock","paper","scissors"];
    let compchoice = compoptions[Math.floor(Math.random() * compoptions.length)]
    console.log("Computer choose = " + compchoice)
    return compchoice;
}
function playRound(playerSelection,compSelection){
    // playerSelection = playerSelection.toLowerCase();
    // compSelection = compSelection.toLowerCase();
    if(playerSelection === compSelection){
        return("You tie!")
    }
    else if(compSelection === 'scissors'){
        return("You win!Rock beats Scissors")
    }
    else {
        return("You lose!Paper beats Rock")
    }
}
const playerSelection = "rock";
console.log("Player choose = "+ playerSelection);
const compSelection = computerplay();
playRound();
console.log(playRound(playerSelection, compSelection));
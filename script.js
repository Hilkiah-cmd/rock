const playerRock = document.querySelector('.rock');
const playerPaper = document.querySelector('.paper');
const playerScissor = document.querySelector('.scissors');
const playerScoreDisplay = document.getElementById('playerScore');
const compScoreDisplay = document.getElementById('compScore');
const endGame = document.querySelector('.final');
const comment = document.querySelector('#comment');
const game = document.querySelector('.game');
const btn = document.querySelector('#btn');
let final = document.querySelector('.final-wrapper');
let compScore = 0;
let playerScore = 0;
let result;
let playerSelection;
function computerplay(){
    var compoptions = ["rock","paper","scissors"];
    let compchoice = compoptions[Math.floor(Math.random() * compoptions.length)];
    console.log("Computer choose = " + compchoice);
    return compchoice;
}
playerRock.addEventListener('click', function (){
    playRound('rock');
})
playerPaper.addEventListener('click',function(){
    playRound('paper');
})
playerScissor.addEventListener('click',function(){
    playRound('scissors');
})
function playRound(playerSelection){
    let compSelection = computerplay();
    console.log("You choose =" +playerSelection)
    if(playerSelection === compSelection){
        comment.textContent = 'Its a tie';
        console.log("You tie!")
    }
    else if(compSelection === 'scissors'){
    switch(playerSelection) {
        case 'paper': 
            comment.textContent = 'You lose!Scissor beats paper';
            console.log("You lose!Scissor beats paper");
            compScore += 1;
            compScoreDisplay.textContent = compScore;
            break;

        case 'rock':
            comment.textContent = "You win!Rock beats scissors";
            console.log("You win!Rock beats scissors");
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            break;
            
    }}
    else if(compSelection === 'paper'){
    switch(playerSelection){
        case 'rock': 
            comment.textContent = "You lose!Paper beats rock";
            console.log("You lose!Paper beats rock");
            compScore += 1;
            compScoreDisplay.textContent = compScore;
            break;
            
        case 'scissors':
            comment.textContent = "You win!Scissors beats paper";
            console.log("You win!Scissors beats paper");
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            break;
            
        }
    }
    else if(compSelection === 'rock'){
    switch(playerSelection){
        case 'paper': 
            comment.textContent = "You Win!Paper beats rock";
            console.log("You Win!Paper beats rock");
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            break;
            
        case 'scissors':
            comment.textContent = "You Lose!Rock beats paper";
            console.log("You Lose!Rock beats paper");
            compScore += 1;
            compScoreDisplay.textContent = compScore;
            break;
        }
    }
    else{
        console.log("Invalid entry");
    }
    getWinner();
}
function getWinner(){
    if(playerScore === 5 && playerScore > compScore){
        compScore = 0;
        playerScore = 0;
        compScoreDisplay.textContent = compScore;
        playerScoreDisplay.textContent = playerScore;
        game.style.display = "none";
        endGame.innerHTML = 'Hooray!You won against the super computer';
        endGame.style.display = "block";
        final.style.display = "block";
    }
    else if(compScore === 5 && compScore > playerScore){
        compScore = 0;
        playerScore = 0;
        compScoreDisplay.textContent = 0;
        playerScoreDisplay.textContent = 0;
        game.style.display = 'none';
        endGame.innerHTML = 'You lost!The super computer wins!!!!!';
        endGame.style.display = "block";
        final.style.display = "";
    }
}
btn.addEventListener('click',function(){
    game.style.display = "block";
})
// function game(){
//    // for(let i=0;i<5;i++){
//          result = playRound();
//          if(result === '1'){
//             playerScore = playerScore + 1;
//         }else if(result === '0'){
//             compScore = compScore +1;
//         }
//    // }
//     console.log("Your score = "+playerScore+" wins");
//     console.log("Computer score = "+compScore+" wins")
//     if(playerScore === compScore){
//         console.log("It's a draw");
//     }else if(playerScore > compScore){
//         console.log("You win!Bravo");
//     }else if(compScore > playerScore){
//         console.log("You lose!Try Again Next time")
//     }
// }
// game();

// const playerSelection = "rock";
// console.log("Player choose = "+ playerSelection);
// const compSelection = computerplay();
// playRound();
// console.log(playRound(playerSelection, compSelection));
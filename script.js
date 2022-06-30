const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() { 
    computerSelection = options[Math.floor(Math.random() * (3))].toUpperCase(); 
    return computerSelection;
}

const rockPlayer = document.querySelector('.rock-player');
const paperPlayer = document.querySelector('.paper-player');
const scissorsPlayer = document.querySelector('.scissors-player');
const rockComputer = document.querySelector('.rock-computer');
const paperComputer = document.querySelector('.paper-computer');
const scissorsComputer = document.querySelector('.scissors-computer');

function playRound(playerSelection) { 
    computerSelection = computerPlay();
    let playerSelectionToDisplay = playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase(); //Create a more polished version of an option name 
    let computerSelectionToDisplay = computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase(); //Create a more polished version of an option name 

    if (
            (playerSelection === 'PAPER' && computerSelection === 'ROCK') || 
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || 
            (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    ) { //Winning conditions for a player
        console.log(`You win! ${playerSelectionToDisplay} beats ${computerSelectionToDisplay}`); 
        return 'w' //returns a winLoseIndicator
    } else if (
            (computerSelection === 'PAPER' && playerSelection === 'ROCK') || 
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || 
            (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')
        ){ //Losing conditions for a player
        console.log(`You lose! ${playerSelectionToDisplay} is beaten by ${playerSelectionToDisplay}`);
        return 'l' //returns a winLoseIndicator
    } else {
        console.log(`It's a tie! ${playerSelectionToDisplay} and ${playerSelectionToDisplay}`);
        return 't' //returns a winLoseIndicator
    }
}

// function game() {
//     let playerScore = 0; //Create score counters
//     let computerScore = 0;
//     let winLoseIndicator = ''; //Instantiate a winLoseIndicator

//     while ((playerScore < 5) && (computerScore < 5)) {
//         let playerSelection = prompt('Choose Rock, Paper or Scissors: ').toUpperCase(); //Ask for an input
//         let computerSelection = computerPlay();
//         winLoseIndicator = playRound(playerSelection, computerSelection);
//         if (winLoseIndicator === 'w') {
//             playerScore++;
//             console.log('The score is: ' + playerScore + ' : ' + computerScore);
//         } else if (winLoseIndicator === 'l') {
//             computerScore++;
//             console.log('The score is: ' + playerScore + ' : ' + computerScore);
//         } else {
//             console.log('The score is: ' + playerScore + ' : ' + computerScore);
//         }
//     }

//     if (playerScore > computerScore) {
//         return 'Congratulations! You\'ve won!'
//     } else {
//         return 'Computer wins!'
//     }
// }

//Buttons' functionality 
rockPlayer.addEventListener('click', () => {
    playRound('ROCK');
});

paperPlayer.addEventListener('click', () => {
    playRound('PAPER');
})

scissorsPlayer.addEventListener('click', () => {
    playRound('SCISSORS');
})
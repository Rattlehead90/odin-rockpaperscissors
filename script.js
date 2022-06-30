const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() { 
    computerSelection = options[Math.floor(Math.random() * (3))].toUpperCase(); 
    if (computerSelection === 'ROCK') {
        rockComputer.setAttribute('style', 'filter: brightness(0) saturate(100%) invert(41%) sepia(92%) saturate(6053%) hue-rotate(338deg) brightness(86%) contrast(96%); transform:rotate(-20deg);');
        setTimeout(clearAnimations, 500);
    }
    if (computerSelection === 'PAPER') {
        paperComputer.setAttribute('style', 'filter: brightness(0) saturate(100%) invert(45%) sepia(65%) saturate(2828%) hue-rotate(178deg) brightness(97%) contrast(99%); transform:rotate(-20deg);')
        setTimeout(clearAnimations, 500);
    }
    if (computerSelection === 'SCISSORS') {
        scissorsComputer.setAttribute('style', 'filter: brightness(0) saturate(100%) invert(81%) sepia(74%) saturate(5051%) hue-rotate(354deg) brightness(101%) contrast(100%); transform:rotate(-20deg);')
        setTimeout(clearAnimations, 500);
    }
    return computerSelection;
}

function clearAnimations() {
        rockComputer.style.removeProperty('filter');
        rockComputer.setAttribute('style', 'transform:rotate(0deg);');
        paperComputer.style.removeProperty('filter');
        paperComputer.setAttribute('style', 'transform:rotate(0deg);');
        scissorsComputer.style.removeProperty('filter');
        scissorsComputer.setAttribute('style', 'transform:rotate(0deg);');
}

const rockPlayer = document.querySelector('.rock-player');
const paperPlayer = document.querySelector('.paper-player');
const scissorsPlayer = document.querySelector('.scissors-player');
const rockComputer = document.querySelector('.rock-computer');
const paperComputer = document.querySelector('.paper-computer');
const scissorsComputer = document.querySelector('.scissors-computer');

function playRound(playerSelection) { 
    let computerSelection = computerPlay();
    let playerSelectionToDisplay = playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase(); //Create a more polished version of an option name 
    let computerSelectionToDisplay = computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase(); //Create a more polished version of an option name 

    if (
            (playerSelection === 'PAPER' && computerSelection === 'ROCK') || 
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || 
            (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    ) { //Winning conditions for a player
        console.log(`You win! ${playerSelectionToDisplay} beats ${computerSelectionToDisplay}`); 
        return 'w' //returns a winLoseIndicator
    } else if (playerSelection === computerSelection){ //Tie conditions for a player
        console.log(`It's a tie! ${playerSelectionToDisplay} and ${computerSelectionToDisplay}`);
        return 't' //returns a winLoseIndicator
    } else {
        console.log(`You lose! ${playerSelectionToDisplay} is beaten by ${computerSelectionToDisplay}`);
        return 'l' //returns a winLoseIndicator
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
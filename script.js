const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() {
    let randomlyGeneratedIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //A randomly generated index to use with options array
    return options[randomlyGeneratedIndex(0, 2)].toUpperCase(); //Fetching an option from the array, combining the randomlyGeneratedIndex and options
}


function playRound(playerSelection, computerSelection) { 
    let playerSelectionToDisplay = playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase(); //Create a more polished version of an option name 
    let computerSelectionToDisplay = computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase(); //Create a more polished version of an option name 

    if ((playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')) {
        console.log(`You win! ${playerSelectionToDisplay} beats ${computerSelectionToDisplay}`);
        return 'w'
    } else if ((computerSelection === 'PAPER' && playerSelection === 'ROCK') || (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')){
        console.log(`You lose! ${computerSelectionToDisplay} beats ${playerSelectionToDisplay}`);
        return 'l'
    } else {
        console.log(`It's a tie! ${computerSelectionToDisplay} and ${playerSelectionToDisplay}`);
        return 't'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winLoseIndicator = '';

    while ((playerScore < 5) && (computerScore < 5)) {
        let playerSelection = prompt('Choose Rock, Paper or Scissors: ').toUpperCase();
        let computerSelection = computerPlay();
        winLoseIndicator = playRound(playerSelection, computerSelection);
        if (winLoseIndicator === 'w') {
            playerScore++;
            console.log('The score is: ' + playerScore + ' : ' + computerScore);
        } else if (winLoseIndicator === 'l') {
            computerScore++;
            console.log('The score is: ' + playerScore + ' : ' + computerScore);
        } else {
            console.log('The score is: ' + playerScore + ' : ' + computerScore);
        }
    }

    if (playerScore > computerScore) {
        return 'Congratulations! You\'ve won!'
    } else {
        return 'Computer wins!'
    }
}
const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() {
    return options[Math.floor(Math.random() * (2 - 0 + 1))].toUpperCase(); //Fetching an option from the array, combining the randomlyGeneratedIndex and options
}


function playRound(playerSelection, computerSelection) { 
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
        console.log(`You lose! ${playerSelectionToDisplay} is beaten by ${computerSelectionToDisplay}`);
        return 'l' //returns a winLoseIndicator
    } else {
        console.log(`It's a tie! ${playerSelectionToDisplay} and ${computerSelectionToDisplay}`);
        return 't' //returns a winLoseIndicator
    }
}

function game() {
    let playerScore = 0; //Create score counters
    let computerScore = 0;
    let winLoseIndicator = ''; //Instantiate a winLoseIndicator

    while ((playerScore < 5) && (computerScore < 5)) {
        let playerSelection = prompt('Choose Rock, Paper or Scissors: ').toUpperCase(); //Ask for an input
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

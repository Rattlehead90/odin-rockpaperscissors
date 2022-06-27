const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() {
    let randomlyGeneratedIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //A randomly generated index to use with options array
    console.log('The computer played: ' + options[randomlyGeneratedIndex(0, 2)]); //Fetching an option from the array, combining the randomlyGeneratedIndex and options
}


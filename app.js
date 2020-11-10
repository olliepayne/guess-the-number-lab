const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  setSecretNum: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
  },
  numLowMessage: 'Your guess is too low!',
  numHighMessage: 'Your guess is too high!',
};

const player = {
  name: '',
  previousGuesses: [],
  setPlayerName: function() {
    this.name = prompt("What's your name ?", 'Enter here...');   
  }
}

init();
function init() {
  game.setSecretNum();
  console.log(game.secretNum);  // REMOVE

  player.previousGuesses = [];
  player.setPlayerName();

  alert(`${game.title}`);
  displayGuessInput();
}

function displayGuessInput() {
  let guessPrompt = prompt(`Guess a number between ${game.smallestNum} and ${game.biggestNum} ...Previous guesses: ${player.previousGuesses}`, 'Enter here...');
  if(!isNaN(guessPrompt)) {
    const playerGuess = parseInt(guessPrompt);
    checkGuess(playerGuess);
  } else {
    alert(`Input needs to be a number! ...Your Input: ${guessPrompt}`);
    displayGuessInput();
  }
}

function checkGuess(playerGuess) {
  if(playerGuess >= game.smallestNum && playerGuess <= game.biggestNum) {
    if(playerGuess < game.secretNum) {
      alert(game.numLowMessage);
      player.previousGuesses.push(playerGuess);
      displayGuessInput();
    } else if(playerGuess > game.secretNum) {
      alert(game.numHighMessage);
      player.previousGuesses.push(playerGuess);
      displayGuessInput();
    } else {
      player.previousGuesses.push(playerGuess);
      playerWins();
    }
  } else {
    alert(`Number needs to be within ${game.smallestNum} and ${game.biggestNum}`);
  }
}

function playerWins() {
  alert(`Congratulations, ${player.name}! You guessed correctly with a total of ${player.previousGuesses.length} guesses! :O`);

  init();
}








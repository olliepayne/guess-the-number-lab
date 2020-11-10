const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  init: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    player.guess = undefined;
    player.previousGuesses = [];
    player.setPlayerName();

    game.renderGuessInput();
  },
  renderGuessInput: function() {
    let guessPrompt = prompt(`Guess a number between ${game.smallestNum} and ${game.biggestNum} ...Previous guesses: ${player.previousGuesses}`, 'Enter Here...');
    if(!isNaN(guessPrompt)) {
      player.guess = parseInt(guessPrompt);
      player.previousGuesses.push(player.guess);
      game.checkGuess();
    } else {
      alert('Guess needs to be a number');
      game.renderGuessInput();
    }
  },
  checkGuess: function() {
    if(player.guess >= game.smallestNum && player.guess <= game.biggestNum) {
      if(player.guess > game.secretNum) {
        alert(`Your guess was too high! You guessed: ${player.guess}`);
        game.renderGuessInput();
      } else if(player.guess < game.secretNum) {
        alert(`Your guess was too low! You guessed: ${player.guess}`);
        game.renderGuessInput();
      } else {
        game.endGame();
      }
    } else {
      alert(`Guess must be between ${game.smallestNum} and ${game.biggestNum}`);
      game.renderGuessInput();
    }
  },
  endGame: function() {
    alert(`Congratulations ${player.name}! You guessed correctly with ${player.previousGuesses.length} tries! :O`);

    game.init();
  },
};

const player = {
  name: '',
  setPlayerName: function() {
    this.name = prompt("What's your name?", 'Enter Here...');
  },
  guess: 0,
  previousGuesses: [],
};

game.init();
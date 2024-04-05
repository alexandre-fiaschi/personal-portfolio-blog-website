'use strict';

// selecting elements, this 2 are the same, one uses query selector the other uses eget element by id, see the difference on how to call them #score--0, score--1
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//player scores
let currentScore, activePlayer, playing, scores;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// start the game
init();

//func to switch player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling a dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice
    diceEl.classList.remove('hidden');
    //console.log(dice);
    diceEl.src = `dice-${dice}.png`;
    // 3. check if rolled 1: if true, switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0El.textContent = currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if current player score is >= 100
    if (scores[activePlayer] >= 100) {
      // if yes, finishe the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // else switch to next player
      switchPlayer();
    }
  }
});

//restart the game
btnNew.addEventListener('click', init);

//NOTE: my solution to restart the game, refactored in init()
//restart the game
//   playing = true;
//   scores[0] = 0;
//   scores[1] = 0;
//   currentScore = 0;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add('player--active');
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   activePlayer = 0;

// game.js — all game logic.
// This file never touches the page directly. It exposes a few functions
// that index.html calls, and hands back plain objects describing what
// happened. index.html decides how to turn those into visible text.

// gameState holds everything about the round in progress. It's declared with
// "let" at the top level of the file (not inside any function), which makes
// it "global state" — every function below can read it and change it, and
// once index.html loads this script, index.html can read it too.
let gameState = {
  currentPerson: null,  // the personality object the player is trying to guess
  attempts: 0,           // how many guesses made this round (0 to MAX_ATTEMPTS)
  hintsRevealed: [],     // hint strings unlocked so far, in order
  score: 0,              // running total across all rounds played
  roundOver: false       // true once the round has been won or lost
};

const MAX_ATTEMPTS = 3;

// Points awarded for a correct guess, keyed by which attempt it was.
const POINTS_BY_ATTEMPT = { 1: 30, 2: 20, 3: 10 };

// Starts a new round: picks a random person from PERSONALITIES (loaded from
// data.js via a <script> tag) and resets everything else back to zero.
function startNewRound() {
  const randomIndex = Math.floor(Math.random() * PERSONALITIES.length);
  gameState.currentPerson = PERSONALITIES[randomIndex];
  gameState.attempts = 0;
  gameState.hintsRevealed = [];
  gameState.roundOver = false;
}

// Turns raw player input into a form safe to compare: lowercase, with
// leading/trailing whitespace removed ("trimmed").
function normalizeGuess(text) {
  return text.toLowerCase().trim();
}

// Checks whether a normalized guess matches any of the current person's
// accepted answers.
function isCorrectGuess(normalizedGuess) {
  return gameState.currentPerson.acceptedAnswers.includes(normalizedGuess);
}

// Called each time the player submits a guess. Updates gameState and
// returns a plain object describing the outcome, for index.html to display.
function submitGuess(rawGuess) {
  if (gameState.roundOver) {
    return { error: "Round is already over. Start a new round." };
  }

  gameState.attempts++;
  const correct = isCorrectGuess(normalizeGuess(rawGuess));

  if (correct) {
    const pointsAwarded = POINTS_BY_ATTEMPT[gameState.attempts];
    gameState.score += pointsAwarded;
    gameState.roundOver = true;
    return {
      correct: true,
      attempts: gameState.attempts,
      pointsAwarded: pointsAwarded,
      totalScore: gameState.score,
      roundOver: true
    };
  }

  // Wrong guess, and no attempts left: reveal the answer instead of a hint.
  if (gameState.attempts >= MAX_ATTEMPTS) {
    gameState.roundOver = true;
    return {
      correct: false,
      attempts: gameState.attempts,
      roundOver: true,
      answer: gameState.currentPerson.name,
      totalScore: gameState.score
    };
  }

  // Wrong guess, attempts remain: reveal the next hint.
  const nextHint = gameState.currentPerson.hints[gameState.hintsRevealed.length];
  gameState.hintsRevealed.push(nextHint);
  return {
    correct: false,
    attempts: gameState.attempts,
    roundOver: false,
    newHint: nextHint,
    totalScore: gameState.score
  };
}

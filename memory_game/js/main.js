let cardNames = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

function addCard(cardId) {
  // Add card to the array of selected cards
  console.log(`User flipped ${cardNames[cardId]}`);
  cardsInPlay.push(cardId);
}

function isMoveValid(cardId) {
  // Check whether the next move is valid
  if (cardsInPlay.length === 1 && cardsInPlay[0] === cardId) {
    return false;
  }
  return true;
}

function checkForMatch() {
  // Check if first card matches second card
  if (cardNames[cardsInPlay[0]] === cardNames[cardsInPlay[1]]) {
    console.log("You've found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
  // Main function that deals with user action
  if (isMoveValid(cardId)) {
    addCard(cardId);
  } else {
    console.log("Invalid move. Please try again.");
  }

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
}

flipCard(0);
flipCard(1);

flipCard(0);
flipCard(2);

flipCard(0);
flipCard(0);
flipCard(1);

let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

function addCard(cardId) {
  console.log(`User flipped ${cards[cardId]}`);
  cardsInPlay.push(cardId);
}

function isMoveValid(cardId) {
  if (cardsInPlay.length === 1 && cardsInPlay[0] === cardId) {
    return false;
  }
  return true;
}

function checkForMatch() {
  if (cards[cardsInPlay[0]] === cards[cardsInPlay[1]]) {
    console.log("You've found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
  if (cardsInPlay.length === 0) {
    addCard(cardId);
  } else if (cardsInPlay.length === 1) {
    if (isMoveValid(cardId)) {
      addCard(cardId);
      checkForMatch();
      cardsInPlay = [];
    } else {
      console.log("Invalid move. Please try again.");
    }
  }
}

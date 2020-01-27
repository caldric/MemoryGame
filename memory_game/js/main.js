class Card {
  constructor(rank, suit, cardImage) {
    this.rank = rank;
    this.suit = suit;
    this.cardImage = cardImage;
  }
}

let cards = [
  new Card('queen', 'hearts', 'images/queen-of-hearts.png'),
  new Card('queen', 'diamonds', 'images/queen-of-diamonds.png'),
  new Card('king', 'hearts', 'images/king-of-hearts.png'),
  new Card('king', 'diamonds', 'images/king-of-diamonds.png')
];
let cardsInPlay = [];

function addCard(cardId) {
  // Add card to the array of selected cards
  console.log(`User flipped ${cards[cardId].rank}`);
  cardsInPlay.push(cards[cardId]);
}

function isMoveValid(cardId) {
  // Check whether the next move is valid
  if (cardsInPlay.length === 1 && cardsInPlay[0] === cards[cardId]) {
    return false;
  }
  return true;
}

function checkForMatch() {
  // Check if first card matches second card
  if (cards[0].rank === cards[1].rank) {
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

// flipCard(0);
// flipCard(1);
//
// flipCard(0);
// flipCard(2);
//
// flipCard(0);
// flipCard(0);
// flipCard(1);

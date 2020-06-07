class Card {
  constructor(rank, suit, cardImage) {
    this.rank = rank;
    this.suit = suit;
    this.cardImage = cardImage;
  }
}

function addCard(cardId) {
  // Add card to the array of selected cards
  console.log(`User flipped ${cards[cardId].rank}`);
  cardsInPlay.push(cards[cardId]);
}

function moveIsValid(cardId) {
  // Check whether the next move is valid
  if (cardsInPlay.length === 1 && cardsInPlay[0] === cards[cardId]) {
    return false;
  }
  return true;
}

function cardsMatch() {
  // Check if first card matches second card
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    return true;
  }
  return false;
}

function flipCard() {
  // Event listener function
  let cardId = this.getAttribute('data-id');
  if (moveIsValid(cardId)) {
    addCard(cardId);
  } else {
    alert("Invalid move. Please try again.");
  }

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    if (cardsMatch()) {
      alert("You've found a match!");
    } else {
      alert("Cards did not match. Please try again.");
    };
    cardsInPlay = [];
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

let cards = [
  new Card('queen', 'hearts', 'images/queen-of-hearts.png'),
  new Card('queen', 'diamonds', 'images/queen-of-diamonds.png'),
  new Card('king', 'hearts', 'images/king-of-hearts.png'),
  new Card('king', 'diamonds', 'images/king-of-diamonds.png')
];
let cardsInPlay = [];

createBoard();

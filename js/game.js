const suits = ["H", "D", "C", "S"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = new Deck(6);
let discardDeck = [];
var i = 0;
deck.createDeck(suits, values);
deck.shuffle();
deck.shuffle();
var table = document.getElementById("table");
let player = new Player(1, 500);
let game = new Table();
game.addPlayers(7);
game.dealHands();
game.dealer.draw();
//game.showPlayersCards();
//game.showDealerCards();

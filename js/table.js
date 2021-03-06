//Třída hracího stolu
class Table {
  constructor() {
    this.players = [];
    this.dealer = new Dealer();
    this.playersCount = 0;
  }
  //přídat hráče do stolu(max 5 hráčů)
  addPlayer(id) {
    if (id < 7) {
      if (this.playersCount > 6) {} else {
        var uniq = true;
        for (var player of this.players) {
          if (player.id == i) {
            uniq = false;
          }
        }
        if (uniq) {
          this.players.push(new Player(id, 10000));
          this.playersCount++;
        }
      }
      return this.players;
    } else {
      return "Choose id between 0 to 6";
    }
  }
  addPlayers(count) {
    if (this.playersCount > 4) {} else {
      for (var i = 0; i < count; i++) {
        var uniq = true;
        for (var player of this.players) {
          if (player.id == i) {
            uniq = false;
          }
        }
        if (uniq) {
          this.players.push(new Player(i, 10000));
          this.playersCount++;

        }
      }
    }
    return this.players;
  }
  //odstrání hráče z hracího stolu
  removePlayer(id) {
    this.players.splice(id, 1);
    this.playersCount--;
    return this.players;
  }
  removePlayers() {
    this.players.splice(0, 7);
    this.playersCount = 0;
    return this.players;
  }
  dealHands(x) {
    for (var player of this.players) {
      player.addHand(x);
    }
    return this.players;
  }
  removeHands() {
    for (var player of this.players) {
      player.removeHands();
    }
    return this.players;
  }
  //funkce která zavolá funkci show hands pro všechny hráče
  showPlayersCards() {
    for (var player of this.players) {
      player.showHands();
    }
    return this.players;
  }
  showPlayerCard(idP, idC, idH, idR) {
    this.players[idP].showCard(idC, idR, idH, false);
    return this.player;
  }
  showDealerCards() {
    this.dealer.showCards();
    return this.dealer;
  }
  showDealerCard(id) {
    this.dealer.showCard(id);
    return this.dealer;
  }
}

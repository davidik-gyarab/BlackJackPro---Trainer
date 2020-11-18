let cardCounting = 0;

function cardCount(value) {
  if (value == "A") {
    cardCounting++;
  } else if (value == "K" || value == "Q" || value == "J") {
    cardCounting++;
  } else if (value < 7) {
    cardCounting--;
  } else if (value == 10) {
    cardCounting++;
  } else {}
  document.getElementById("cc").innerHTML = "Card count: " + cardCounting;
  return value;
}

function cardLeft() {
  console.log(deck.length);
  document.getElementById("cl").innerHTML = "Cards left: " + deck.length;
  return deck.length;
}

function perfectBasicStrategy(playerTotal, aceTrue, splitTrue, dealerTotal, cards, split) {
  let decision;
  if (aceTrue) {
    if (playerTotal < 22) {
      if (splitTrue) {

        playerTotal /= 2;
        console.log("SPLIT ACE");
        console.log(playerTotal);
        pairSplitting(playerTotal, dealerTotal);
      } else {
        playerTotal -= 11;
        console.log("ACE");
        console.log(playerTotal);
        softTotals(playerTotal, dealerTotal);
      }
    }else {
      playerTotal -= 11;
      console.log("HARD");
      console.log(playerTotal);
      hardTotals(playerTotal, dealerTotal);
    }

  } else if (splitTrue) {
    playerTotal /= 2;
    console.log("SPLIT");
    console.log(playerTotal);
    pairSplitting(playerTotal, dealerTotal);

  } else {
    console.log("HARD");
    console.log(playerTotal);
    hardTotals(playerTotal, dealerTotal);

  }

  function hardTotals(playerValue, dealerValue) {
    if (playerValue == 4 && split == true) {
      decision = "DOUBLE";
    } else if (playerValue < 9) {
      decision = "HIT";
    }
    if (playerValue == 9) {
      if (dealerValue == 2 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 10) {
      if (dealerValue > 9) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 11) {
      if (dealerValue == 11) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 12) {
      if (dealerValue < 4 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "STAY";
      }
    }
    if (playerValue == 13) {
      if (dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "STAY";
      }
    }
    if (playerValue == 14) {
      if (dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "STAY";
      }
    }
    if (playerValue == 15) {
      if (dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "STAY";
      }
    }
    if (playerValue == 16) {
      if (dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "STAY";
      }
    }
    if (playerValue > 16) {
      decision = "STAY";
    }


  }

  function softTotals(playerValue, dealerValue) {
    if (playerValue == 2) {
      if (dealerValue < 5 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 3) {
      if (dealerValue < 5 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 4) {
      if (dealerValue < 4 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 5) {
      if (dealerValue < 4 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 6) {
      if (dealerValue < 3 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "HIT";
        }
      }
    }
    if (playerValue == 7) {
      if (dealerValue < 7) {
        decision = "DOUBLE";
        if (cards > 2) {
          decision = "STAY";
        }
      } else if (dealerValue < 9) {
        decision = "STAY";
      } else {
        decision = "HIT";
      }
    }

    if (playerValue > 7) {
      decision = "STAY";
    }

  }

  function pairSplitting(playerValue, dealerValue) {
    if (playerValue == 2) {
      if (dealerValue < 4 || dealerValue > 7) {

        decision = "HIT";
      } else {
        decision = "SPLIT";
      }
    }
    if (playerValue == 3) {
      if (dealerValue < 4 || dealerValue > 7) {
          decision = "HIT";
      } else {
  decision = "SPLIT";
      }
    }
    if (playerValue == 4) {
      if (dealerValue < 5 || dealerValue > 6) {
        decision = "HIT";
      } else {
      decision = "SPLIT -> DOUBLE";
      }
    }
    if (playerValue == 5) {
      if (dealerValue > 10) {
        decision = "HIT";
      } else {
        decision = "DOUBLE";
      }
    }
    if (playerValue == 6) {
      if (dealerValue < 3 || dealerValue > 6) {
        decision = "HIT";
      } else {
        decision = "SPLIT";
      }
    }
    if (playerValue == 7) {
      if (dealerValue > 7) {
        decision = "HIT";
      } else {
        decision = "SPLIT";
      }
    }

    if (playerValue == 8) {
      decision = "SPLIT";
    }
    if (playerValue == 9) {
      if (dealerValue == 7 || dealerValue > 9) {
        decision = "STAY";
      } else {
        decision = "SPLIT";
      }
    }

    if (playerValue == 10) {
      decision = "STAY";
    }
    if (playerValue > 11) {
      decision = "SPLIT";
    }


  }

  function lateSurrender(playerValue, dealerValue) {
    if (playerValue == 15) {
      if (dealerValue == 10) {
        decision = "SURR";
      } else {
        decision = "DON'T SURR";
      }
    }
    if (playerValue == 16) {
      if (dealerValue < 9) {
        decision = "DON'T SURR";
      } else {
        decision = "SURR";
      }
    } else {
      decision = "DON'T SURR";
    }

  }
  console.log(decision);
  document.getElementById("bs").innerHTML = "Basic Strategy: " + decision;
}

function getElementTopLeft(id) {

  var ele = document.getElementById(id);
  var top = 0;
  var left = 0;

  while (ele.tagName != "BODY") {
    top += ele.offsetTop;
    left += ele.offsetLeft;
    ele = ele.offsetParent;
  }

  return {
    top: top,
    left: left
  };

}

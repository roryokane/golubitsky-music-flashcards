import flashCards from "./flashCards/polychordFractions.json";
const _ = require("lodash");

function cards() {
  return _.entries(flashCards).map(function (cardValues) {
    return {
      front: cardValues[0],
      back: cardValues[1],
    };
  });
}

function randomCard(previousCard) {
  let allCards = cards();

  while (true) {
    let card = _.sample(allCards);

    if (!_.isEqual(card, previousCard)) {
      return card;
    }
  }
}

export { cards, randomCard };

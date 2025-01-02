import { Card, CardData } from '../models/Card';
import { cardData } from '../data/cardData';

export function generateInitialDeck(): Card[] {
  const deck: Card[] = [];
  
  cardData.forEach((data: CardData) => {
    for (let i = 0; i < data.nb; i++) {
      deck.push({
        id: `${data.cardfile}-${i}`,
        topNumber: data.n1,
        bottomNumber: data.n2,
        imagePath: `/cards/${data.cardfile}` // Simplified path
      });
    }
  });
  
  return shuffleDeck(deck);
}

function shuffleDeck(deck: Card[]): Card[] {
  return [...deck].sort(() => Math.random() - 0.5);
}
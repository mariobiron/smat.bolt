import { useState } from 'react';
import { Card, Position } from '../models/Card';
import { validatePlacement } from '../utils/gameRules';

export function useCardPlacement(
  playerHand: Card[],
  placedCards: Map<Position, Card>,
  onHandUpdate: (newHand: Card[]) => void,
  onPlacedCardsUpdate: (newPlacedCards: Map<Position, Card>) => void
) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const selectCard = (card: Card) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const placeCard = (position: Position) => {
    if (!selectedCard || !validatePlacement(selectedCard, position, placedCards)) {
      return;
    }

    const newPlacedCards = new Map(placedCards);
    newPlacedCards.set(position, selectedCard);
    
    const newHand = playerHand.filter(card => card.id !== selectedCard.id);
    
    onPlacedCardsUpdate(newPlacedCards);
    onHandUpdate(newHand);
    setSelectedCard(null);
  };

  return {
    selectedCard,
    selectCard,
    placeCard
  };
}
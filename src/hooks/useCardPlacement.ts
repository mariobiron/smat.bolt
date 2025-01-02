import { useState } from 'react';
import { Card, Position } from '../models/Card';
import { validatePlacement } from '../utils/gameRules';

export function useCardPlacement(
  playerHand: Card[],
  placedCards: Map<Position, Card>,
  setPlayerHand: (cards: Card[]) => void,
  setPlacedCards: (cards: Map<Position, Card>) => void
) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const selectCard = (card: Card) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const placeCard = (position: Position) => {
    if (!selectedCard) return;
    
    try {
      // Create new Map to trigger re-render
      const newPlacedCards = new Map(placedCards);
      newPlacedCards.set(position, selectedCard);
      
      setPlacedCards(newPlacedCards);
      setPlayerHand(playerHand.filter(card => card.id !== selectedCard.id));
      setSelectedCard(null);
    } catch (error) {
      console.error('Error placing card:', error);
    }
  };

  return {
    selectedCard,
    selectCard,
    placeCard
  };
}
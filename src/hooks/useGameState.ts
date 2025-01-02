import { useState, useEffect } from 'react';
import { Card, Position } from '../models/Card';
import { generateInitialDeck } from '../utils/deckUtils';

export function useGameState() {
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [placedCards, setPlacedCards] = useState<Map<Position, Card>>(new Map());

  useEffect(() => {
    const deck = generateInitialDeck();
    const initialHand = deck.slice(0, 7); // Deal 7 cards
    setPlayerHand(initialHand);
  }, []);

  return {
    playerHand,
    placedCards,
    setPlayerHand,
    setPlacedCards,
  };
}
import { useState, useEffect } from 'react';
import { Card, Position } from '../models/Card';
import { Player } from '../models/Player';
import { generateInitialDeck } from '../utils/deckUtils';

interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  placedCards: Map<Position, Card>;
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const deck = generateInitialDeck();
    
    // Deal 7 cards to each player
    const player1Hand = deck.slice(0, 7);
    const player2Hand = deck.slice(7, 14);
    
    return {
      players: [
        { id: '1', name: 'Player 1', hand: player1Hand },
        { id: '2', name: 'Player 2', hand: player2Hand }
      ],
      currentPlayerIndex: 0,
      placedCards: new Map()
    };
  });

  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  const nextTurn = () => {
    setGameState(prev => ({
      ...prev,
      currentPlayerIndex: (prev.currentPlayerIndex + 1) % prev.players.length
    }));
  };

  return {
    players: gameState.players,
    currentPlayer,
    placedCards: gameState.placedCards,
    nextTurn,
    setGameState
  };
}
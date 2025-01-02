import React from 'react';
import { CardSlot } from './CardSlot';
import { PlayerHand } from './PlayerHand';
import { useGameState } from '../hooks/useGameState';
import { useCardPlacement } from '../hooks/useCardPlacement';
import { Position } from '../models/Card';

export function GameBoard() {
  const { players, currentPlayer, placedCards, nextTurn, setGameState } = useGameState();
  const { selectedCard, selectCard, placeCard } = useCardPlacement(
    currentPlayer.hand,
    placedCards,
    (newHand) => {
      setGameState(prev => ({
        ...prev,
        players: prev.players.map(player =>
          player.id === currentPlayer.id
            ? { ...player, hand: newHand }
            : player
        )
      }));
      nextTurn();
    },
    (newPlacedCards) => {
      setGameState(prev => ({
        ...prev,
        placedCards: newPlacedCards
      }));
    }
  );

  const positions: Position[] = ['top', 'left', 'right', 'bottom'];

  return (
    <div className="game-board">
      {/* Opponent's hand */}
      <PlayerHand
        player={players[1]}
        isCurrentPlayer={players[1].id === currentPlayer.id}
        selectedCard={selectedCard}
        onCardSelect={selectCard}
      />

      {/* Play area */}
      <div className="play-area">
        {positions.map(position => (
          <CardSlot
            key={position}
            position={position}
            card={placedCards.get(position)}
            onClick={() => placeCard(position)}
          />
        ))}
      </div>

      {/* Current player's hand */}
      <PlayerHand
        player={players[0]}
        isCurrentPlayer={players[0].id === currentPlayer.id}
        selectedCard={selectedCard}
        onCardSelect={selectCard}
      />
    </div>
  );
}
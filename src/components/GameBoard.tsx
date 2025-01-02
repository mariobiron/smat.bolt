import React from 'react';
import { Card as CardComponent } from './Card';
import { CardSlot } from './CardSlot';
import { useGameState } from '../hooks/useGameState';
import { useCardPlacement } from '../hooks/useCardPlacement';
import { Position } from '../models/Card';

export function GameBoard() {
  const { playerHand, placedCards, setPlayerHand, setPlacedCards } = useGameState();
  const { selectedCard, selectCard, placeCard } = useCardPlacement(
    playerHand,
    placedCards,
    setPlayerHand,
    setPlacedCards
  );

  const positions: Position[] = ['top', 'left', 'right', 'bottom'];

  return (
    <div className="game-board">
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
      <div className="player-hand">
        {playerHand.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            isSelected={selectedCard?.id === card.id}
            onClick={() => selectCard(card)}
          />
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Card as CardComponent } from './Card';
import { Card } from '../models/Card';
import { Player } from '../models/Player';

interface PlayerHandProps {
  player: Player;
  isCurrentPlayer: boolean;
  selectedCard?: Card;
  onCardSelect: (card: Card) => void;
}

export function PlayerHand({ player, isCurrentPlayer, selectedCard, onCardSelect }: PlayerHandProps) {
  return (
    <div className={`player-section ${isCurrentPlayer ? 'current' : ''}`}>
      <div className="player-info">
        <h3>{player.name}</h3>
        <span className="card-count">Cards: {player.hand.length}</span>
      </div>
      <div className="player-hand">
        {isCurrentPlayer ? (
          player.hand.map((card) => (
            <CardComponent
              key={card.id}
              card={card}
              isSelected={selectedCard?.id === card.id}
              onClick={() => onCardSelect(card)}
            />
          ))
        ) : (
          // Show card backs for opponent
          player.hand.map((_, index) => (
            <div key={index} className="card card-back" />
          ))
        )}
      </div>
    </div>
  );
}
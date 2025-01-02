import React from 'react';
import { Card as CardComponent } from './Card';
import { Card, Position } from '../models/Card';

interface CardSlotProps {
  position: Position;
  onClick: () => void;
  card?: Card;
}

export function CardSlot({ position, onClick, card }: CardSlotProps) {
  return (
    <div 
      className={`card-slot ${position} ${card ? 'occupied' : ''}`}
      onClick={onClick}
    >
      {card && (
        <div className="card-container">
          <CardComponent card={card} />
        </div>
      )}
    </div>
  );
}
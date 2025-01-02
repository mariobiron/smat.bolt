import React from 'react';
import { Card as CardType } from '../models/Card';

interface CardProps {
  card: CardType;
  isSelected?: boolean;
  onClick?: () => void;
}

export function Card({ card, isSelected, onClick }: CardProps) {
  return (
    <div 
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img 
        src={card.imagePath} 
        alt={`${card.topNumber}-${card.bottomNumber}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
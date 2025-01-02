import { Card, Position } from '../models/Card';

export function validatePlacement(
  card: Card,
  position: Position,
  placedCards: Map<Position, Card>
): boolean {
  // For now, just check if the position is empty
  return !placedCards.has(position);
  
  // TODO: Add more complex validation rules later:
  // - Check if numbers match adjacent cards
  // - Validate mathematical operations
}
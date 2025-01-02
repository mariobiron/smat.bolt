export interface Card {
  id: string;
  topNumber: number;
  bottomNumber: number;
  imagePath: string;
}

export interface CardData {
  n1: number;
  n2: number;
  cardfile: string;
  nb: number;
}

export type Position = 'left' | 'right' | 'top' | 'bottom';
export type Operator = '+' | '-' | '×' | '÷';
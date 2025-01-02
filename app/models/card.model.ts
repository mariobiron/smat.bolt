export interface Card {
    id: string;
    topNumber: number;
    bottomNumber: number;
    imagePath: string;
}

export type Position = 'left' | 'right' | 'top' | 'bottom';
export type Operator = '+' | '-' | '×' | '÷';
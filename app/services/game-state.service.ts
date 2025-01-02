import { Observable } from '@nativescript/core';
import { Card, Position } from '../models/card.model';

export class GameStateService extends Observable {
    private static instance: GameStateService;
    private _placedCards: Map<Position, Card> = new Map();
    private _playerHand: Card[] = [];

    private constructor() {
        super();
    }

    static getInstance(): GameStateService {
        if (!GameStateService.instance) {
            GameStateService.instance = new GameStateService();
        }
        return GameStateService.instance;
    }

    startNewGame(initialHand: Card[]): void {
        this._playerHand = initialHand;
        this._placedCards.clear();
        this.notifyPropertyChange('playerHand', this._playerHand);
        this.notifyPropertyChange('placedCards', this._placedCards);
    }

    placeCard(card: Card, position: Position): boolean {
        if (!this.isValidPlacement(card, position)) {
            return false;
        }

        this._placedCards.set(position, card);
        this._playerHand = this._playerHand.filter(c => c.id !== card.id);
        this.notifyPropertyChange('playerHand', this._playerHand);
        this.notifyPropertyChange('placedCards', this._placedCards);
        return true;
    }

    private isValidPlacement(card: Card, position: Position): boolean {
        // TODO: Implement placement validation logic
        return true;
    }

    get playerHand(): Card[] {
        return this._playerHand;
    }

    get placedCards(): Map<Position, Card> {
        return this._placedCards;
    }
}
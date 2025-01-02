import { Observable } from '@nativescript/core';
import { Card } from '../../models/card.model';

export class CardComponent extends Observable {
    private _card: Card;
    private _isSelected: boolean = false;
    private _rotation: number = 0; // 0 or 180 degrees

    constructor(card: Card) {
        super();
        this._card = card;
    }

    get card(): Card {
        return this._card;
    }

    get isSelected(): boolean {
        return this._isSelected;
    }

    get rotation(): number {
        return this._rotation;
    }

    toggleSelection(): void {
        this._isSelected = !this._isSelected;
        this.notifyPropertyChange('isSelected', this._isSelected);
    }

    rotate(): void {
        this._rotation = this._rotation === 0 ? 180 : 0;
        this.notifyPropertyChange('rotation', this._rotation);
    }
}
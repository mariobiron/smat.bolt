import { Observable } from '@nativescript/core';
import { Card } from '../../../models/card.model';

export class PlayerHandComponent extends Observable {
    private _cards: Card[] = [];

    get cards(): Card[] {
        return this._cards;
    }

    set cards(value: Card[]) {
        this._cards = value;
        this.notifyPropertyChange('cards', this._cards);
    }
}
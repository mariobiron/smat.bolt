import { Observable } from '@nativescript/core';
import { Position } from '../../../models/card.model';

export class CardSlotComponent extends Observable {
    private _position: Position;

    constructor(position: Position) {
        super();
        this._position = position;
    }

    get position(): Position {
        return this._position;
    }

    get cssClass(): string {
        return `card-slot ${this._position}`;
    }
}
import { Observable } from '@nativescript/core';
import { Card, Position } from '../../models/card.model';
import { DeckService } from '../../services/deck.service';
import { GameStateService } from '../../services/game-state.service';

export class GameBoardComponent extends Observable {
    private gameState: GameStateService;
    private deckService: DeckService;

    constructor() {
        super();
        this.gameState = GameStateService.getInstance();
        this.deckService = DeckService.getInstance();
        this.initializeGame();
    }

    async initializeGame(): Promise<void> {
        await this.deckService.initializeDeck();
        this.gameState.startNewGame(this.deckService.drawCards(7));
    }
}
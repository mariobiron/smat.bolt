import { Application } from '@nativescript/core';
import { GameBoardComponent } from './components/game-board/game-board.component';

Application.run({ create: () => new GameBoardComponent() });
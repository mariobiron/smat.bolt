import { Card } from '../models/card.model';
import { CSVService } from './csv.service';
import { AssetService } from './asset.service';

export class DeckService {
    private static instance: DeckService;
    private deck: Card[] = [];
    private discardPile: Card[] = [];

    private constructor() {}

    static getInstance(): DeckService {
        if (!DeckService.instance) {
            DeckService.instance = new DeckService();
        }
        return DeckService.instance;
    }

    async initializeDeck(): Promise<void> {
        const csvService = CSVService.getInstance();
        const assetService = AssetService.getInstance();
        const cardData = await csvService.parseCardCSV();
        
        this.deck = [];
        
        // Create cards based on the quantity specified in the CSV
        cardData.forEach(data => {
            for (let i = 0; i < data.nb; i++) {
                this.deck.push({
                    id: `${data.cardfile}_${i}`,
                    topNumber: data.n1,
                    bottomNumber: data.n2,
                    imagePath: assetService.getCardImagePath(data.cardfile)
                });
            }
        });
        
        this.shuffle();
    }

    shuffle(): void {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    drawCard(): Card | undefined {
        return this.deck.pop();
    }

    drawCards(count: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < count; i++) {
            const card = this.drawCard();
            if (card) {
                cards.push(card);
            }
        }
        return cards;
    }

    discardCard(card: Card): void {
        this.discardPile.push(card);
    }

    reshuffleDiscardPile(): void {
        this.deck.push(...this.discardPile);
        this.discardPile = [];
        this.shuffle();
    }

    getRemainingCards(): number {
        return this.deck.length;
    }
}
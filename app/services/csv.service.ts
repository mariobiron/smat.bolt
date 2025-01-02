import { File, knownFolders, path } from '@nativescript/core';

interface CardData {
    n1: number;
    n2: number;
    cardfile: string;
    nb: number;
}

export class CSVService {
    private static instance: CSVService;

    private constructor() {}

    static getInstance(): CSVService {
        if (!CSVService.instance) {
            CSVService.instance = new CSVService();
        }
        return CSVService.instance;
    }

    async parseCardCSV(): Promise<CardData[]> {
        const csvPath = path.join(knownFolders.currentApp().path, 'assets', 'cards.csv');
        const csvFile = File.fromPath(csvPath);
        const content = await csvFile.readText();
        
        const lines = content.split('\n');
        const cards: CardData[] = [];
        
        // Skip header line
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const [n1, n2, cardfile, nb] = line.split(',');
                cards.push({
                    n1: parseInt(n1),
                    n2: parseInt(n2),
                    cardfile: cardfile,
                    nb: parseInt(nb)
                });
            }
        }
        
        return cards;
    }
}
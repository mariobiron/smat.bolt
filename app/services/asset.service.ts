import { knownFolders, path } from '@nativescript/core';

export class AssetService {
    private static instance: AssetService;
    private readonly assetsPath: string;

    private constructor() {
        this.assetsPath = knownFolders.currentApp().path + '/assets';
    }

    static getInstance(): AssetService {
        if (!AssetService.instance) {
            AssetService.instance = new AssetService();
        }
        return AssetService.instance;
    }

    getCardImagePath(cardFile: string): string {
        return path.join(this.assetsPath, 'cards', cardFile);
    }

    getCardBackPath(): string {
        return path.join(this.assetsPath, 'back.jpg');
    }

    getIconPath(iconName: string): string {
        return path.join(this.assetsPath, 'icons', iconName);
    }
}
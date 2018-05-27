import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private dataStorage: DataStorageService) {}

    onSaveData(): void {
        this.dataStorage.storeRecipes().subscribe(
            (response: Response) => console.log(response),
            (error: Response) => console.log(error)
        );
    }

    onGetData(): void {
        this.dataStorage.getRecipes();
    }
}

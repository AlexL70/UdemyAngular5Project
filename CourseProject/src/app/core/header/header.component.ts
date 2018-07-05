import { Component } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private dataStorage: DataStorageService,
        public authService: AuthService) {}

    onSaveData(): void {
        this.dataStorage.storeRecipes().subscribe(
            (response: HttpEvent<object>) => console.log(response),
            (error: HttpEvent<object>) => console.log(error)
        );
    }

    onGetData(): void {
        this.dataStorage.getRecipes();
    }
}

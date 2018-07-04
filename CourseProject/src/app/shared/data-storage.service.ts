import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) {}

    storeRecipes(): Observable<Response> {
        const token = this.authService.getToken();
        return this.httpClient.put(`https://zlonngrecipebook.firebaseio.com/recipes.json?auth=${token}`,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>(`https://zlonngrecipebook.firebaseio.com/recipes.json?auth=${token}`)
        .map(
            (recipes) => {
                for (const recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { Body } from '@angular/http/src/body';

@Injectable()
export class DataStorageService {
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) {}

    storeRecipes(): Observable<Object> {
        const token = this.authService.getToken();
        return this.httpClient.put(`https://zlonngrecipebook.firebaseio.com/recipes.json?auth=${token}`,
            this.recipeService.getRecipes(), {
                observe: 'body'
            });
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>(`https://zlonngrecipebook.firebaseio.com/recipes.json?auth=${token}`, {
            observe: 'body',
            responseType: 'json'
        })
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

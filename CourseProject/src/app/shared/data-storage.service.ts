import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes(): Observable<Response> {
        return this.http.put('https://zlonngrecipebook.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://zlonngrecipebook.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
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

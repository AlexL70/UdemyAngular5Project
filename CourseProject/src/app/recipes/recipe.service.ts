import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A tasty Schnitzel',
        'A super-tasty Schnitzel – just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/Wiener_Schnitzel_mit_Sardelle_in_Dresden.JPG',
        [   new Ingredient('Meat', 1),
            new Ingredient('French fries', 20),
            new Ingredient('Lemon', 1)
        ]),
        new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
        [   new Ingredient('Bun', 2),
            new Ingredient('Meet', 1),
            new Ingredient('Cheese', 1),
            new Ingredient('Salad', 1)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]): void {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(): Recipe[] {
        //  return copy so that recipe array cannot be changed from outside
        return this.recipes.slice();
    }

    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe): void {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number): void {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

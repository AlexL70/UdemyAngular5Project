import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    ingridientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingridientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.ingridientsChanged.next(this.ingredients.slice());
    }
}

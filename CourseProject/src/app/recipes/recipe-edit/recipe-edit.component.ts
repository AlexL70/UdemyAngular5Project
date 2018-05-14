import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editMode = params.id != null;
      if (this.editMode) {
        this.id = +params.id;
      }
      this.initForm();
    });
  }

  private initForm(): void {
    const recipe: Recipe = this.editMode ? this.recipeService.getRecipe(this.id)
      : new Recipe('', '', '', []);
    const recipeIngredients: FormGroup[] = [];
    if (recipe.ingredients) {
      for (const ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name),
            amount: new FormControl(ingredient.amount)
          }));
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipe.name),
      imagePath: new FormControl(recipe.imagePath),
      description: new FormControl(recipe.description),
      ingredients: new FormArray(recipeIngredients)
    });
  }

  onSubmit(): void {
    console.log(this.recipeForm.value);
  }

  onAddIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }
}

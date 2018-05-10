import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

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
    this.recipeForm = new FormGroup({
      name: new FormControl(recipe.name),
      imagePath: new FormControl(recipe.imagePath),
      description: new FormControl(recipe.description)
    });
  }

  onSubmit(): void {
    console.log(this.recipeForm.value);
  }
}

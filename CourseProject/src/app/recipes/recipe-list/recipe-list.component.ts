import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test recipe description',
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Goulash_from_usa.jpg'),
    new Recipe('Second test recipe', 'This is just a second test recipe description',
    // tslint:disable-next-line:max-line-length
    'https://sftextures.com/texture/1829/0/1828/autumn-leaves-yellow-orange-red-og-green-grass-damaged-wetahered-beautiful-colorful-ground-seamless-texture-256x256.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

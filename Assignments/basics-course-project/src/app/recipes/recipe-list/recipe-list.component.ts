import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test recipe description',
    // tslint:disable-next-line:max-line-length
    `https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcc%2FRecipe-575434.svg%2F1199px-Recipe-575434.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe-575434.svg&docid=H4ROo-OAOZiKPM&tbnid=6cJdALsSsjm86M%3A&vet=10ahUKEwif15DT6O7ZAhVI8WMKHUAED98QMwinAigDMAM..i&w=1199&h=1024&client=firefox-b-1-ab&bih=689&biw=1512&q=recipe&ved=0ahUKEwif15DT6O7ZAhVI8WMKHUAED98QMwinAigDMAM&iact=mrc&uact=8`)
  ];

  constructor() { }

  ngOnInit() {
  }

}

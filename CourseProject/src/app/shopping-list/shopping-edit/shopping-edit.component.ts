import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientForm') ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.ingredientForm.value.name,
        this.ingredientForm.value.amount));
  }
}

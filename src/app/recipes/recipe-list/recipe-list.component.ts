import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'this is a test',
      'https://file.hstatic.net/200000303304/article/steak_10_b1b1397477ea4c8ca1f215989632a614_1024x1024.jpg'
    ),
    new Recipe(
      'A Test recipe',
      'this is a test',
      'https://file.hstatic.net/200000303304/article/steak_10_b1b1397477ea4c8ca1f215989632a614_1024x1024.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

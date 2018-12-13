import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipes', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
        new Ingredient('Buns', 2),
        new Ingredient('Croissant', 1)
      ]
)
    ];

    getRecipes() {
        return this.recipes;
    }
}

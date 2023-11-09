import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Coffee','A delicious coffee','http://nfow.jpg',[]),
        new Recipe('A Test Recipe2','This is a sample recipe','http://nfow.jpg',[]),
        new Recipe('A Test Recipe3','This is a sample recipe','http://nfow.jpg',[]),  
      ];

      getRecipes(){
        return this.recipes.slice();

      }
}